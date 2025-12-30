/*
 * This code is part of the course "Java SE Advanced Language Features" for Pluralsight.
 *
 * Copyright (C) 2024 by Jesper de Jong (jesper@jdj-it.com).
 */
package com.pluralsight.advancedjava.exercises.assertions;

import javax.lang.model.element.TypeElement;

public class TypeElementAssert extends AbstractElementAssert<TypeElementAssert, TypeElement> {

    public TypeElementAssert(TypeElement actual) {
        super(actual, TypeElementAssert.class);
    }

    public static TypeElementAssert assertThat(TypeElement actual) {
        return new TypeElementAssert(actual);
    }

    public TypeElementAssert hasQualifiedName(String expectedQualifiedName) {
        isNotNull();
        var actualQualifiedName = actual.getQualifiedName();
        if (!actualQualifiedName.contentEquals(expectedQualifiedName)) {
            failWithActualExpectedAndMessage(actualQualifiedName, expectedQualifiedName, "");
        }
        return myself;
    }
}
