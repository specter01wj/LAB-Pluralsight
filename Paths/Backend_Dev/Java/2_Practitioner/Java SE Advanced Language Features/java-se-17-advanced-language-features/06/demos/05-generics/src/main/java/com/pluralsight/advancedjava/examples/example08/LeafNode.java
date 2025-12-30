/*
 * This code is part of the course "Java SE Advanced Language Features" for Pluralsight.
 *
 * Copyright (C) 2024 by Jesper de Jong (jesper@jdj-it.com).
 */
package com.pluralsight.advancedjava.examples.example08;

/**
 * Example 8: Type erasure.
 * <p>
 * This is what it would look like after type erasure: the type parameter T has been discarded
 * and all occurrences of T have been replaced by Object.
 */
public class LeafNode implements TreeNode {

    private final Object value;

    public LeafNode(Object value) {
        this.value = value;
    }

    @Override
    public Object getValue() {
        return value;
    }

    @Override
    public TreeNode getLeft() {
        return null;
    }

    @Override
    public TreeNode getRight() {
        return null;
    }

    @Override
    public String toString() {
        return String.format("[%s]", value);
    }
}
