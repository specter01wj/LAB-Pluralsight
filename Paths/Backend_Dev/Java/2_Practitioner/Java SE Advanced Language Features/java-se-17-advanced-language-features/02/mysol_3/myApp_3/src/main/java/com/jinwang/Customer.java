package com.jinwang;

public record Customer(long id, String name, String email) {

    /**
     * Override the accessor for 'name' to return a default value if it's null or blank.
     * WARNING: This breaks the assumption that accessor methods return actual field values,
     * which can cause unexpected behavior in equals(), hashCode(), and copy operations.
     */
    @Override
    public String name() {
        return name != null && !name.isBlank() ? name : "anonymous";
    }
}
