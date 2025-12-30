/*
 * This code is part of the course "Java SE Advanced Language Features" for Pluralsight.
 *
 * Copyright (C) 2024 by Jesper de Jong (jesper@jdj-it.com).
 */
package com.pluralsight.advancedjava.exercises.assertions;

import javax.lang.model.element.ExecutableElement;
import javax.lang.model.type.NoType;
import javax.lang.model.type.TypeVariable;

public class ExecutableElementAssert extends AbstractElementAssert<ExecutableElementAssert, ExecutableElement> {

    public ExecutableElementAssert(ExecutableElement actual) {
        super(actual, ExecutableElementAssert.class);
    }

    public static ExecutableElementAssert assertThat(ExecutableElement actual) {
        return new ExecutableElementAssert(actual);
    }

    public ExecutableElementAssert hasReturnType(String expectedTypeName) {
        isNotNull();
        return checkType(actual.getReturnType(), expectedTypeName);
    }

    public ExecutableElementAssert hasReturnType(TypeVariable expectedType) {
        isNotNull();
        return checkType(actual.getReturnType(), expectedType);
    }

    public ExecutableElementAssert hasReturnTypeVoid() {
        isNotNull();
        var actualType = actual.getReturnType();
        if (actualType instanceof NoType) {
            return myself;
        } else {
            throw failureWithActualExpected(actualType, "void", "");
        }
    }
}
