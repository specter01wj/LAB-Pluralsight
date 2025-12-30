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
public class InnerNode implements TreeNode {

    private final TreeNode left, right;

    public InnerNode(TreeNode left, TreeNode right) {
        this.left = left;
        this.right = right;
    }

    @Override
    public Object getValue() {
        return null;
    }

    @Override
    public TreeNode getLeft() {
        return left;
    }

    @Override
    public TreeNode getRight() {
        return right;
    }

    @Override
    public String toString() {
        return String.format("{%s, %s}", left, right);
    }
}
