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
public class MaxValueInnerNode implements TreeNode {

    private final TreeNode left, right;

    public MaxValueInnerNode(TreeNode left, TreeNode right) {
        this.left = left;
        this.right = right;
    }

    @Override
    public Comparable getValue() {
        var leftValue = left.getValue();
        var rightValue = right.getValue();

        var result = leftValue.compareTo(rightValue);

        // Return whichever value was largest.
        return result >= 0 ? leftValue : rightValue;
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
