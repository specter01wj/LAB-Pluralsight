package com.jinwang;

import static com.jinwang.Validation.checkThat;

public record Customer(long id, String name, String email) {

    public Customer {
        checkThat(name != null && !name.isBlank(), "name must not be null or blank");
        checkThat(email != null && !email.isBlank(), "email must not be null or blank");
    }

}
