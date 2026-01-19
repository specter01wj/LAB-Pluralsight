package com.model;

import static com.jinwang.Validation.checkThat;

public record Product(long id, String name, String description) {

    public Product {
        checkThat(name != null && !name.isBlank(), "Name must not be null or blank");
        checkThat(description != null && !description.isBlank(), "Description must not be null or blank");
    }
}
