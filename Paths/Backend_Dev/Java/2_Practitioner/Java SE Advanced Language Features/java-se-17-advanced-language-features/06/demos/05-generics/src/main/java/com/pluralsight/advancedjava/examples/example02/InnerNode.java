/*
 * This code is part of the course "Java SE Advanced Language Features" for Pluralsight.
 *
 * Copyright (C) 2024 by Jesper de Jong (jesper@jdj-it.com).
 */
package com.pluralsight.advancedjava.examples.example02;

import java.util.function.BinaryOperator;

// Inner (non-leaf) node in a binary tree.
public class InnerNode<T> implements TreeNode<T> {

    private final TreeNode<T> left, right;
    private final BinaryOperator<T> operator;

    public InnerNode(TreeNode<T> left, TreeNode<T> right, BinaryOperator<T> operator) {
        this.left = left;
        this.right = right;
        this.operator = operator;
    }

    @Override
    public T getValue() {
        return operator.apply(left.getValue(), right.getValue());
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
        return String.format("[%s, %s]", left, right);
    }
}
