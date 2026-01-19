package com.model;

import static com.jinwang.Validation.checkThat;

public record Customer(long id, String name, String email, Address shippingAddress) {

    public Customer {
        checkThat(name != null && !name.isBlank(), "Name must not be null or blank");
        checkThat(email != null && !email.isBlank(), "Email must not be null or blank");
        checkThat(shippingAddress != null, "Shipping address must not be null");
    }
}
