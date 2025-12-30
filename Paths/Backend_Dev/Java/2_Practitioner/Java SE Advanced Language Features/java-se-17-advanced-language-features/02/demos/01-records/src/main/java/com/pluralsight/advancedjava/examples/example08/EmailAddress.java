/*
 * This code is part of the course "Java SE Advanced Language Features" for Pluralsight.
 *
 * Copyright (C) 2024 by Jesper de Jong (jesper@jdj-it.com).
 */
package com.pluralsight.advancedjava.examples.example08;

import java.util.regex.Pattern;

import static com.pluralsight.advancedjava.examples.Validation.checkThat;

// Domain-specific types such as EmailAddress can be reused wherever you need to work with an email address.
public record EmailAddress(String value) {

    private static final Pattern EMAIL_PATTERN = Pattern.compile(".+@.+\\..+");

    // The logic for validating the email address is now contained in this record, where it belongs.
    public EmailAddress {
        checkThat(value != null && !value.isBlank(), "value must not be null or blank");
        checkThat(EMAIL_PATTERN.matcher(value).matches(), "not a valid email address: " + value);
    }

    @Override
    public String toString() {
        return value;
    }
}
