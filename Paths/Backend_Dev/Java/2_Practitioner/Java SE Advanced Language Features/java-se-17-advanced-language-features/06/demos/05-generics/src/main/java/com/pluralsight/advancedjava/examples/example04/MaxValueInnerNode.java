/*
 * This code is part of the course "Java SE Advanced Language Features" for Pluralsight.
 *
 * Copyright (C) 2024 by Jesper de Jong (jesper@jdj-it.com).
 */
package com.pluralsight.advancedjava.examples.example04;

// Inner (non-leaf) node in a binary tree.
// Note that interface TreeNode has a bounded type parameter. We need to add this bound to the type parameter of this class as well,
// because we are passing T as a type argument to TreeNode.
public class MaxValueInnerNode<T extends Comparable<T>> implements TreeNode<T> {

    private final TreeNode<T> left, right;

    public MaxValueInnerNode(TreeNode<T> left, TreeNode<T> right) {
        this.left = left;
        this.right = right;
    }

    @Override
    public T getValue() {
        T leftValue = left.getValue();
        T rightValue = right.getValue();

        // Note that we can use Comparable.compareTo() here on the values leftValue and rightValue, which are of type T,
        // because type T is bounded by Comparable<T>.
        var result = leftValue.compareTo(rightValue);

        // Return whichever value was largest.
        return result >= 0 ? leftValue : rightValue;
    }

    @Override
    public TreeNode<T> getLeft() {
        return left;
    }

    @Override
    public TreeNode<T> getRight() {
        return right;
    }

    @Override
    public String toString() {
        return String.format("{%s, %s}", left, right);
    }
}
