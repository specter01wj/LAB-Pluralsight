/*
 * This code is part of the course "Java SE Advanced Language Features" for Pluralsight.
 *
 * Copyright (C) 2024 by Jesper de Jong (jesper@jdj-it.com).
 */
package com.pluralsight.advancedjava.exercises.assertions;

import org.assertj.core.api.AbstractObjectAssert;

import javax.lang.model.type.TypeMirror;
import javax.lang.model.type.WildcardType;

public class WildcardTypeAssert extends AbstractObjectAssert<WildcardTypeAssert, WildcardType> {

    public WildcardTypeAssert(WildcardType actual) {
        super(actual, WildcardTypeAssert.class);
    }

    public static WildcardTypeAssert assertThat(WildcardType actual) {
        return new WildcardTypeAssert(actual);
    }

    public WildcardTypeAssert isUnbounded() {
        isNotNull();
        if (actual.getExtendsBound() != null || actual.getSuperBound() != null) {
            throw failureWithActualExpected(actual, "?", "");
        }
        return myself;
    }

    public WildcardTypeAssert hasUpperBound(TypeMirror expectedUpperBound) {
        isNotNull();
        if (actual.getExtendsBound() == null) {
            throw failureWithActualExpected(actual, "? extends " + expectedUpperBound, "");
        }
        return myself;
    }

    public WildcardTypeAssert hasLowerBound(TypeMirror expectedLowerBound) {
        isNotNull();
        if (actual.getSuperBound() == null) {
            throw failureWithActualExpected(actual, "? super " + expectedLowerBound, "");
        }
        return myself;
    }
}
