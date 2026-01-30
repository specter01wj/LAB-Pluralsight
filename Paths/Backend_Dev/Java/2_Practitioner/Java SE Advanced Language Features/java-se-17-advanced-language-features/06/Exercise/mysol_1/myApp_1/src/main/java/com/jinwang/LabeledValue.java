package com.jinwang;

/**
 * Exercise 1: Make this class a generic type.
 */
public class LabeledValue<T> {

    private final String label;
    private final T value;

    public LabeledValue(String label, T value) {
        this.label = label;
        this.value = value;
    }

    public String getLabel() {
        return label;
    }

    public T getValue() {
        return value;
    }
}
