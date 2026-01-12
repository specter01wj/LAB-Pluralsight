package com.jinwang;

import static com.jinwang.Validation.checkThat;

public record Product(long id, String name, String description) {

    public Product {
        checkThat(name != null && !name.isBlank(), "name must not be null or blank");
    }

}
