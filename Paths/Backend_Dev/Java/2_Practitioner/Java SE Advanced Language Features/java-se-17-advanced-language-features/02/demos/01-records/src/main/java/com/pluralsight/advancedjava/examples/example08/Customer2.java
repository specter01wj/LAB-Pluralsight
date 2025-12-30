/*
 * This code is part of the course "Java SE Advanced Language Features" for Pluralsight.
 *
 * Copyright (C) 2024 by Jesper de Jong (jesper@jdj-it.com).
 */
package com.pluralsight.advancedjava.examples.example08;

import static com.pluralsight.advancedjava.examples.Validation.checkThat;

// By creating domain-specific types for the name, nickname and email address, they can be easily distinguished by their types.
public record Customer2(long id, FullName fullName, NickName nickName, EmailAddress email) {

    // The constructor can now leave logic such as validating the email address to the EmailAddress record.
    public Customer2 {
        checkThat(fullName != null, "fullName must not be null");
        checkThat(nickName != null, "nickName must not be null");
        checkThat(email != null, "email must not be null");
    }
}
