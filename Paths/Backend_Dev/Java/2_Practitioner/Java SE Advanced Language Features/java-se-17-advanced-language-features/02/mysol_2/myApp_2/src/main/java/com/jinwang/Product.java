package com.jinwang;

public record Product(long id, String name, String description) {

    /**
     * Checks if the product has a non-blank description.
     *
     * @return true if description is non-null and not blank, false otherwise
     */
    public boolean hasDescription() {
        return description != null && !description.isBlank();
    }
}
