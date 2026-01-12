package com.jinwang;

import static com.jinwang.Validation.checkThat;

public record Product(long id, String name, String description) {

    // Compact canonical constructor: validates required fields
    public Product {
        checkThat(name != null && !name.isBlank(), "name must not be null or blank");
    }

    // Additional constructor: delegates to the canonical constructor
    // This guarantees validation logic is always applied
    public Product(long id, String name) {
        this(id, name, null);
    }
}
