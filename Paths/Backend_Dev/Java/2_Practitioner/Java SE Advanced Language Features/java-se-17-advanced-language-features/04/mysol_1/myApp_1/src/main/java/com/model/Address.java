package com.model;

import static com.Validation.checkThat;

public record Address(String street, String houseNumber, String city, String country) {

    public Address {
        checkThat(street != null && !street.isBlank(), "Street must not be null or blank");
        checkThat(houseNumber != null && !houseNumber.isBlank(), "House number must not be null or blank");
        checkThat(city != null && !city.isBlank(), "City must not be null or blank");
        checkThat(country != null && !country.isBlank(), "Country must not be null or blank");
    }
}
