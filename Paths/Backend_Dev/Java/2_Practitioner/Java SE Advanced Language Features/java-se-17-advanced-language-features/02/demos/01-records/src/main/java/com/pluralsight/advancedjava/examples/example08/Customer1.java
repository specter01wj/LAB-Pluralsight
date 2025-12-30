/*
 * This code is part of the course "Java SE Advanced Language Features" for Pluralsight.
 *
 * Copyright (C) 2024 by Jesper de Jong (jesper@jdj-it.com).
 */
package com.pluralsight.advancedjava.examples.example08;

import java.util.regex.Pattern;

import static com.pluralsight.advancedjava.examples.Validation.checkThat;

// A "stringly typed" record that represents a customer. It's easy to make a mistake when creating a new instance of this record by passing the arguments
// in the wrong order.
public record Customer1(long id, String firstName, String familyName, String nickName, String email) {

    private static final Pattern EMAIL_PATTERN = Pattern.compile(".+@.+\\..+");

    // The constructor contains validation logic that's specific for the fields, for example to check if the email address is valid.
    // This is logic that strictly speaking is not the responsibility of this record.
    public Customer1 {
        checkThat(firstName != null && !firstName.isBlank(), "firstName must not be null or blank");
        checkThat(familyName != null && !familyName.isBlank(), "familyName must not be null or blank");
        checkThat(nickName != null && !nickName.isBlank(), "nickName must not be null or blank");
        checkThat(email != null && !email.isBlank(), "email must not be null or blank");
        checkThat(EMAIL_PATTERN.matcher(email).matches(), "not a valid email address: " + email);
    }
}
