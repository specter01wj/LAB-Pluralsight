package com.jinwang;

import java.util.Objects;

public record Customer(long id, String name, String email) {

    /**
     * Custom accessor for 'name': returns "anonymous" if name is null or blank.
     */
    @Override
    public String name() {
        return name != null && !name.isBlank() ? name : "anonymous";
    }

    /**
     * Equality based only on 'id' field.
     */
    @Override
    public boolean equals(Object o) {
        return o instanceof Customer other && this.id == other.id;
    }

    /**
     * Hash code based only on 'id' field.
     */
    @Override
    public int hashCode() {
        return Long.hashCode(id);
    }

    /**
     * Simplified string representation.
     */
    @Override
    public String toString() {
        return "[" + id + "] " + name();
    }
}
