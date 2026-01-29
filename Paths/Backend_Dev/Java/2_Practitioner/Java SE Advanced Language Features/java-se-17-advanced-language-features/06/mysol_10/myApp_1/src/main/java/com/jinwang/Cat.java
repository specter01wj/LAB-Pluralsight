package com.jinwang;

public record Cat(String name) implements Animal {
    @Override
    public String toString() {
        return "Cat: " + name;
    }
}
