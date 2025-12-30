/*
 * This code is part of the course "Java SE Advanced Language Features" for Pluralsight.
 *
 * Copyright (C) 2024 by Jesper de Jong (jesper@jdj-it.com).
 */
package com.pluralsight.advancedjava.examples.model;

import static com.pluralsight.advancedjava.examples.Validation.checkThat;

public record Address(String street, String houseNumber, String city, String country) {

    public Address {
        checkThat(street != null && !street.isBlank(), "street must not be null or blank");
        checkThat(houseNumber != null && !houseNumber.isBlank(), "houseNumber must not be null or blank");
        checkThat(city != null && !city.isBlank(), "city must not be null or blank");
        checkThat(country != null && !country.isBlank(), "country must not be null or blank");
    }
}
