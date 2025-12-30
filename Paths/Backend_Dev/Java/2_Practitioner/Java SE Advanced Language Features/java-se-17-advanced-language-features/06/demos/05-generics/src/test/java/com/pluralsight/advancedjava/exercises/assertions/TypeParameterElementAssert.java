/*
 * This code is part of the course "Java SE Advanced Language Features" for Pluralsight.
 *
 * Copyright (C) 2024 by Jesper de Jong (jesper@jdj-it.com).
 */
package com.pluralsight.advancedjava.exercises.assertions;

import javax.lang.model.element.TypeParameterElement;
import javax.lang.model.type.TypeVariable;

public class TypeParameterElementAssert extends AbstractElementAssert<TypeParameterElementAssert, TypeParameterElement> {

    public TypeParameterElementAssert(TypeParameterElement actual) {
        super(actual, TypeParameterElementAssert.class);
    }

    public static TypeParameterElementAssert assertThat(TypeParameterElement actual) {
        return new TypeParameterElementAssert(actual);
    }

    public TypeParameterElementAssert isOfType(String expectedTypeName) {
        isNotNull();
        return checkType(actual.asType(), expectedTypeName);
    }

    public TypeParameterElementAssert isOfType(TypeVariable expectedType) {
        isNotNull();
        return checkType(actual.asType(), expectedType);
    }
}
