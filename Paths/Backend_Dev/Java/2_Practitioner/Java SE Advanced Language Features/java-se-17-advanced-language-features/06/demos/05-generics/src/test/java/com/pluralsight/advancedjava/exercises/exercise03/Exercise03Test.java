/*
 * This code is part of the course "Java SE Advanced Language Features" for Pluralsight.
 *
 * Copyright (C) 2024 by Jesper de Jong (jesper@jdj-it.com).
 */
package com.pluralsight.advancedjava.exercises.exercise03;

import com.pluralsight.advancedjava.exercises.utils.ElementUtils;
import org.junit.jupiter.api.*;

import javax.lang.model.element.Modifier;
import javax.lang.model.type.DeclaredType;
import javax.lang.model.type.TypeVariable;
import javax.lang.model.type.WildcardType;

import static com.pluralsight.advancedjava.exercises.assertions.ExecutableElementAssert.assertThat;
import static com.pluralsight.advancedjava.exercises.assertions.VariableElementAssert.assertThat;
import static com.pluralsight.advancedjava.exercises.assertions.WildcardTypeAssert.assertThat;
import static com.pluralsight.advancedjava.exercises.utils.CompilerUtils.compileAndGetTypeElements;
import static com.pluralsight.advancedjava.exercises.utils.CompilerUtils.compileAndRunTest;
import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.fail;

@DisplayName("Exercise 3")
@Order(3)
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
public class Exercise03Test {

    @Test
    @DisplayName("The addMatchingElements method has the expected signature")
    @Order(1)
    void theAddMatchingElementsMethodHasTheExpectedSignature() {
        var typeElements = compileAndGetTypeElements("src/main/java/com/pluralsight/advancedjava/exercises/exercise03/Exercise03.java");
        var exerciseElement = ElementUtils.getType(typeElements, "com.pluralsight.advancedjava.exercises.exercise03.Exercise03");

        // Get the 'addMatchingElements' method
        var method = ElementUtils.getMethod(exerciseElement, "addMatchingElements");

        // The 'addMatchingElements' method must be static
        assertThat(method.getModifiers())
                .as("The 'addMatchingElements' method must be static")
                .contains(Modifier.STATIC);

        // The 'addMatchingElements' method must have one type parameter
        var typeParams = method.getTypeParameters();
        assertThat(typeParams).as("The 'addMatchingElements' method must have exactly one type parameter").hasSize(1);
        var typeVariable = (TypeVariable) typeParams.get(0).asType();

        // The return type of the 'addMatchingElements' method must be void
        assertThat(method).as("The 'addMatchingElements' method has the wrong return type").hasReturnTypeVoid();

        // The 'addMatchingElements' method must have three parameters
        var params = method.getParameters();
        assertThat(params).as("The 'addMatchingElements' method must have three parameters").hasSize(3);

        // The type of the first parameter must be Iterable
        var srcParam = params.get(0);
        assertThat(srcParam)
                .as("The first parameter ('%s') of the 'addMatchingElements' has the wrong type", srcParam)
                .isOfType("java.lang.Iterable");

        // The type of the first parameter must not be a raw type
        var srcParamType = (DeclaredType) srcParam.asType();
        var srcParamTypeArgs = srcParamType.getTypeArguments();
        assertThat(srcParamTypeArgs)
                .as("The type of the first parameter ('%s') of the 'addMatchingElements' method must not be a raw type; " +
                        "it must have a type argument", srcParam)
                .isNotEmpty();

        // The type argument of the first parameter must be <? extends T>
        var srcParamTypeArg = srcParamTypeArgs.get(0);
        if (srcParamTypeArg instanceof DeclaredType) {
            fail("The type argument of the first parameter ('%s') must not be a concrete type. " +
                    "Change 'T' into an appropriate wildcard type, do not replace it by a concrete type such as: %s", srcParam, srcParamTypeArg);
        } else if (srcParamTypeArg.equals(typeVariable)) {
            fail("The solution might work, but try changing the type argument of the first parameter ('%s') " +
                    "into a wildcard type with an appropriate bound ('? extends T' or '? super T').", srcParam);
        }

        assertThat(srcParamTypeArg)
                .as("The type argument of the first parameter ('%s') is the wrong kind of type", srcParam)
                .isInstanceOf(WildcardType.class);

        assertThat((WildcardType) srcParamTypeArg)
                .as("The bound on the type argument of the first parameter ('%s') is incorrect", srcParam)
                .hasUpperBound(typeVariable);

        // The type of the second parameter must be Collection
        var destParam = params.get(1);
        assertThat(destParam)
                .as("The second parameter ('%s') of the 'addMatchingElements' has the wrong type", destParam)
                .isOfType("java.util.Collection");

        // The type of the second parameter must not be a raw type
        var destParamType = (DeclaredType) destParam.asType();
        var destParamTypeArgs = destParamType.getTypeArguments();
        assertThat(destParamTypeArgs)
                .as("The type of the second parameter ('%s') of the 'addMatchingElements' method must not be a raw type; " +
                        "it must have a type argument", destParam)
                .isNotEmpty();

        // The type argument of the second parameter must be <? super T>
        var destParamTypeArg = destParamTypeArgs.get(0);
        if (destParamTypeArg instanceof DeclaredType) {
            fail("The type argument of the second parameter ('%s') must not be a concrete type. " +
                    "Change 'T' into an appropriate wildcard type, do not replace it by a concrete type such as: %s", destParam, destParamTypeArg);
        } else if (destParamTypeArg.equals(typeVariable)) {
            fail("The solution might work, but try changing the type argument of the second parameter ('%s') " +
                    "into a wildcard type with an appropriate bound ('? extends T' or '? super T').", destParam);
        }

        assertThat(destParamTypeArg)
                .as("The type argument of the second parameter ('%s') is the wrong kind of type", destParam)
                .isInstanceOf(WildcardType.class);

        assertThat((WildcardType) destParamTypeArg)
                .as("The bound on the type argument of the second parameter ('%s') is incorrect", destParam)
                .hasLowerBound(typeVariable);

        // The type of the third parameter must be Predicate
        var predicateParam = params.get(2);
        assertThat(predicateParam)
                .as("The third parameter ('%s') of the 'addMatchingElements' has the wrong type", predicateParam)
                .isOfType("java.util.function.Predicate");

        // The type of the third parameter must not be a raw type
        var predicateParamType = (DeclaredType) predicateParam.asType();
        var predicateParamTypeArgs = predicateParamType.getTypeArguments();
        assertThat(predicateParamTypeArgs)
                .as("The type of the third parameter ('%s') of the 'addMatchingElements' method must not be a raw type; " +
                        "it must have a type argument", predicateParam)
                .isNotEmpty();

        // The type argument of the third parameter must be <? super T>
        var predicateParamTypeArg = predicateParamTypeArgs.get(0);
        if (predicateParamTypeArg instanceof DeclaredType) {
            fail("The type argument of the third parameter ('%s') must not be a concrete type. " +
                    "Change 'T' into an appropriate wildcard type, do not replace it by a concrete type such as: %s", predicateParam, predicateParamTypeArg);
        } else if (predicateParamTypeArg.equals(typeVariable)) {
            fail("The solution might work, but try changing the type argument of the third parameter ('%s') " +
                    "into a wildcard type with an appropriate bound ('? extends T' or '? super T').", predicateParam);
        }

        assertThat(predicateParamTypeArg)
                .as("The type argument of the third parameter ('%s') is the wrong kind of type", predicateParam)
                .isInstanceOf(WildcardType.class);

        assertThat((WildcardType) predicateParamTypeArg)
                .as("The bound on the type argument of the third parameter ('%s') is incorrect", predicateParam)
                .hasLowerBound(typeVariable);
    }

    @Test
    @DisplayName("The addMatchingElements method can be called with appropriate arguments")
    @Order(2)
    void theAddMatchingElementsMethodCanBeCalledWithAppropriateArguments() {
        compileAndRunTest("com.pluralsight.advancedjava.exercises.exercise03.AddMatchingElementsTest",
                "src/main/java/com/pluralsight/advancedjava/exercises/exercise03/Exercise03.java",
                "src/test/resources/com/pluralsight/advancedjava/exercises/exercise03/AddMatchingElementsTest.java");
    }
}
