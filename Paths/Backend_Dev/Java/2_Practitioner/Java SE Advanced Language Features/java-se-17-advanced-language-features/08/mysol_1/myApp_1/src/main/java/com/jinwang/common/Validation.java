package com.jinwang.common;

/**
 * Utility method for validation, used in the examples.
 */
public final class Validation {

    private Validation() {
        // Prevent instantiation
    }

    public static void checkThat(boolean expr, String message) {
        if (!expr) {
            throw new IllegalArgumentException(message);
        }
    }
}
