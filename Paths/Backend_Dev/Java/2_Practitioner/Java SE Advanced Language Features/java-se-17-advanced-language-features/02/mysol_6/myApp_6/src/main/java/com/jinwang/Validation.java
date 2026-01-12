package com.jinwang;

public final class Validation {

    // Private constructor to prevent instantiation
    private Validation() {
        throw new AssertionError("Cannot instantiate utility class");
    }

    /**
     * Checks the given expression and throws {@link IllegalArgumentException} with the specified message
     * if the expression evaluates to {@code false}.
     *
     * @param condition the boolean expression to validate
     * @param message the error message if validation fails
     * @throws IllegalArgumentException if {@code condition} is false
     */
    public static void checkThat(boolean condition, String message) {
        if (!condition) {
            throw new IllegalArgumentException(message);
        }
    }
}
