/*
 * This code is part of the course "Java SE Advanced Language Features" for Pluralsight.
 *
 * Copyright (C) 2024 by Jesper de Jong (jesper@jdj-it.com).
 */
package com.pluralsight.advancedjava.exercises.utils;

import javax.annotation.processing.AbstractProcessor;
import javax.annotation.processing.RoundEnvironment;
import javax.annotation.processing.SupportedAnnotationTypes;
import javax.annotation.processing.SupportedSourceVersion;
import javax.lang.model.SourceVersion;
import javax.lang.model.element.Element;
import javax.lang.model.element.TypeElement;
import javax.lang.model.util.ElementScanner14;
import javax.tools.Diagnostic;
import javax.tools.DiagnosticCollector;
import javax.tools.JavaCompiler;
import javax.tools.JavaFileObject;
import javax.tools.ToolProvider;
import java.io.IOException;
import java.lang.reflect.InvocationTargetException;
import java.net.URL;
import java.net.URLClassLoader;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.Locale;
import java.util.Set;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.fail;

public final class CompilerUtils {

    @SupportedSourceVersion(SourceVersion.RELEASE_21)
    @SupportedAnnotationTypes("*")
    private static class TestProcessor extends AbstractProcessor {
        private final ElementScanner14<Void, Void> elementScanner;

        public TestProcessor(ElementScanner14<Void, Void> elementScanner) {
            this.elementScanner = elementScanner;
        }

        @Override
        public boolean process(Set<? extends TypeElement> annotations, RoundEnvironment roundEnv) {
            if (!roundEnv.processingOver()) {
                for (Element element : roundEnv.getRootElements()) {
                    elementScanner.scan(element);
                }
            }
            return true;
        }
    }

    private static class TypeElementScanner extends ElementScanner14<Void, Void> {
        private final List<TypeElement> typeElements = new ArrayList<>();

        @Override
        public Void visitType(TypeElement e, Void unused) {
            typeElements.add(e);
            return super.visitType(e, unused);
        }

        public List<TypeElement> getTypeElements() {
            return typeElements;
        }
    }

    private CompilerUtils() {
    }

    public static List<TypeElement> compileAndGetTypeElements(String... sourcePaths) {
        var compiler = getJavaCompiler();
        var diagnostics = new DiagnosticCollector<JavaFileObject>();
        try (var fileManager = compiler.getStandardFileManager(diagnostics, null, StandardCharsets.UTF_8); var tmpDir = new TempDirectory()) {
            var elementScanner = new TypeElementScanner();

            var task = compiler.getTask(null, fileManager, diagnostics,
                    Arrays.asList("-d", tmpDir.getDirectory().toAbsolutePath().toString()), null, fileManager.getJavaFileObjects(sourcePaths));
            task.setProcessors(Collections.singletonList(new TestProcessor(elementScanner)));
            task.call();

            checkCompileErrors(diagnostics);

            return elementScanner.getTypeElements();
        } catch (IOException e) {
            fail("IOException while compiling source files", e);
        }

        // fail() always throws an exception, but the compiler doesn't know that
        throw new AssertionError("Unreachable code");
    }

    public static void compileAndRunTest(String testClassName, String... sourcePaths) {
        var compiler = getJavaCompiler();
        var diagnostics = new DiagnosticCollector<JavaFileObject>();
        try (var fileManager = compiler.getStandardFileManager(diagnostics, null, StandardCharsets.UTF_8); var tmpDir = new TempDirectory()) {
            compiler.getTask(null, fileManager, diagnostics,
                    Arrays.asList("-d", tmpDir.getDirectory().toAbsolutePath().toString()), null, fileManager.getJavaFileObjects(sourcePaths)).call();

            checkCompileErrors(diagnostics);

            Class<?> testClass = new URLClassLoader(new URL[]{tmpDir.getDirectory().toUri().toURL()}).loadClass(testClassName);
            testClass.getMethod("run").invoke(testClass.getDeclaredConstructor().newInstance());
        } catch (IOException e) {
            fail("IOException while compiling source files", e);
        } catch (ClassNotFoundException e) {
            fail("Failed to load test class: " + testClassName, e);
        } catch (InstantiationException | IllegalAccessException | NoSuchMethodException e) {
            fail("Failed to invoke test class: " + testClassName, e);
        } catch (InvocationTargetException e) {
            if (e.getCause() instanceof AssertionError ae) {
                throw ae;
            } else {
                fail("Failed to invoke test class: " + testClassName, e);
            }
        }
    }

    private static JavaCompiler getJavaCompiler() {
        var compiler = ToolProvider.getSystemJavaCompiler();
        assertThat(compiler.getSourceVersions())
                .as("Please make sure that you are using a JDK that supports Java 21.")
                .contains(SourceVersion.RELEASE_21);
        return compiler;
    }

    private static void checkCompileErrors(DiagnosticCollector<JavaFileObject> diagnostics) {
        for (Diagnostic<? extends JavaFileObject> diagnostic : diagnostics.getDiagnostics()) {
            if (diagnostic.getKind() == Diagnostic.Kind.ERROR) {
                fail("A compilation error occurred: " + diagnostic.getMessage(Locale.getDefault()));
            }
        }
    }
}
