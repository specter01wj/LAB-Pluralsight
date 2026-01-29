package com.jinwang;

public record Dog(String name) implements Animal {
    @Override
    public String toString() {
        return "Dog: " + name;
    }
}
