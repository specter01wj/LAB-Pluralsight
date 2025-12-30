/*
 * This code is part of the course "Java SE Advanced Language Features" for Pluralsight.
 *
 * Copyright (C) 2024 by Jesper de Jong (jesper@jdj-it.com).
 */
package com.pluralsight.advancedjava.exercises.utils;

import javax.lang.model.element.ElementKind;
import javax.lang.model.element.ExecutableElement;
import javax.lang.model.element.TypeElement;
import javax.lang.model.element.VariableElement;
import java.util.List;
import java.util.stream.Stream;

public final class ElementUtils {

    private ElementUtils() {
    }

    public static TypeElement getType(List<TypeElement> typeElements, String qualifiedTypeName) {
        return typeElements.stream()
                .filter(element -> element.getQualifiedName().contentEquals(qualifiedTypeName))
                .findAny().orElseThrow(() -> new AssertionError("Type %s was not found"));
    }

    public static VariableElement getField(TypeElement typeElement, String fieldName) {
        return getEnclosedElements(typeElement, ElementKind.FIELD, VariableElement.class)
                .filter(element -> element.getSimpleName().contentEquals(fieldName))
                .findAny().orElseThrow(() -> new AssertionError(String.format("Expected type %s to contain a field named %s, but it was not found",
                        typeElement.getQualifiedName(), fieldName)));
    }

    public static List<ExecutableElement> getConstructors(TypeElement typeElement) {
        return getEnclosedElements(typeElement, ElementKind.CONSTRUCTOR, ExecutableElement.class).toList();
    }

    public static ExecutableElement getMethod(TypeElement typeElement, String methodName) {
        return getEnclosedElements(typeElement, ElementKind.METHOD, ExecutableElement.class)
                .filter(element -> element.getSimpleName().contentEquals(methodName))
                .findAny().orElseThrow(() -> new AssertionError(String.format("Expected type %s to contain a method named %s, but it was not found",
                        typeElement.getQualifiedName(), methodName)));
    }

    public static <T> Stream<T> getEnclosedElements(TypeElement typeElement, ElementKind elementKind, Class<T> elementType) {
        return typeElement.getEnclosedElements().stream().filter(element -> element.getKind().equals(elementKind)).map(elementType::cast);
    }
}
