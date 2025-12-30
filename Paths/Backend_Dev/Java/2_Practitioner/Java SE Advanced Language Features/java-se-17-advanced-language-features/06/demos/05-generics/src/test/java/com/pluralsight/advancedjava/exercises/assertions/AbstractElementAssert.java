/*
 * This code is part of the course "Java SE Advanced Language Features" for Pluralsight.
 *
 * Copyright (C) 2024 by Jesper de Jong (jesper@jdj-it.com).
 */
package com.pluralsight.advancedjava.exercises.assertions;

import org.assertj.core.api.AbstractObjectAssert;

import javax.lang.model.element.Element;
import javax.lang.model.element.TypeElement;
import javax.lang.model.type.DeclaredType;
import javax.lang.model.type.TypeMirror;
import javax.lang.model.type.TypeVariable;

public abstract class AbstractElementAssert<SELF extends AbstractElementAssert<SELF, ACTUAL>, ACTUAL extends Element>
        extends AbstractObjectAssert<SELF, ACTUAL> {

    public AbstractElementAssert(ACTUAL actual, Class<?> selfType) {
        super(actual, selfType);
    }

    public SELF hasName(String expectedName) {
        isNotNull();
        var actualName = actual.getSimpleName();
        if (!actualName.contentEquals(expectedName)) {
            failWithActualExpectedAndMessage(actualName, expectedName, "");
        }
        return myself;
    }

    protected SELF checkType(TypeMirror actualType, String expectedTypeName) {
        if (actualType instanceof DeclaredType declaredType) {
            var actualTypeName = ((TypeElement) declaredType.asElement()).getQualifiedName();
            if (!actualTypeName.contentEquals(expectedTypeName)) {
                failWithActualExpectedAndMessage(actualTypeName, expectedTypeName, "");
            }
            return myself;
        } else {
            throw failureWithActualExpected(actualType, expectedTypeName, "");
        }
    }

    protected SELF checkType(TypeMirror actualType, TypeVariable expectedType) {
        if (actualType instanceof TypeVariable) {
            if (!actualType.equals(expectedType)) {
                throw failureWithActualExpected(actualType, expectedType, "");
            }
            return myself;
        } else {
            throw failureWithActualExpected(actualType, expectedType, "");
        }
    }
}
