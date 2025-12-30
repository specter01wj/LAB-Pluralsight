/*
 * This code is part of the course "Java SE Advanced Language Features" for Pluralsight.
 *
 * Copyright (C) 2024 by Jesper de Jong (jesper@jdj-it.com).
 */
package com.pluralsight.advancedjava.examples.example08;

import static com.pluralsight.advancedjava.examples.Validation.checkThat;

public record FullName(String firstName, String familyName) {

    public FullName {
        checkThat(firstName != null && !firstName.isBlank(), "firstName must not be null or blank");
        checkThat(familyName != null && !familyName.isBlank(), "familyName must not be null or blank");
    }

    @Override
    public String toString() {
        return firstName + ' ' + familyName;
    }
}
