/*
 * This code is part of the course "Java SE Advanced Language Features" for Pluralsight.
 *
 * Copyright (C) 2024 by Jesper de Jong (jesper@jdj-it.com).
 */
package com.pluralsight.advancedjava.exercises.assertions;

import javax.lang.model.element.VariableElement;
import javax.lang.model.type.TypeVariable;

public class VariableElementAssert extends AbstractElementAssert<VariableElementAssert, VariableElement> {

    public VariableElementAssert(VariableElement actual) {
        super(actual, VariableElementAssert.class);
    }

    public static VariableElementAssert assertThat(VariableElement actual) {
        return new VariableElementAssert(actual);
    }

    public VariableElementAssert isOfType(String expectedTypeName) {
        isNotNull();
        return checkType(actual.asType(), expectedTypeName);
    }

    public VariableElementAssert isOfType(TypeVariable expectedType) {
        isNotNull();
        return checkType(actual.asType(), expectedType);
    }
}
