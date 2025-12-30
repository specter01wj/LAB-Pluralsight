/*
 * This code is part of the course "Java SE Advanced Language Features" for Pluralsight.
 *
 * Copyright (C) 2024 by Jesper de Jong (jesper@jdj-it.com).
 */
package com.pluralsight.advancedjava.examples.example09;

/**
 * Example 9: Type erasure with bounded type parameters.
 * <p>
 * This is what it would look like after type erasure: the type parameter T has been discarded
 * and all occurrences of T have been replaced by its bound: Comparable.
 */
public class LeafNode implements TreeNode {

    private final Comparable value;

    public LeafNode(Comparable value) {
        this.value = value;
    }

    @Override
    public Comparable getValue() {
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
