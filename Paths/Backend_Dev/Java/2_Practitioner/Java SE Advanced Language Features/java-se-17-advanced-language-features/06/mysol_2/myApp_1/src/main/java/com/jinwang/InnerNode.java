package com.jinwang;

import java.util.function.BinaryOperator;

/**
 * Inner (non-leaf) node in a binary tree.
 *
 * This version demonstrates:
 * - extending generics
 * - lazy evaluation of node value
 * - passing behavior (how to combine values) via BinaryOperator
 */
public class InnerNode<T> implements TreeNode<T> {

    private final TreeNode<T> left;
    private final TreeNode<T> right;
    private final BinaryOperator<T> operator;

    /**
     * Creates an inner node with two child nodes and an operator
     * that defines how their values are combined.
     */
    public InnerNode(TreeNode<T> left, TreeNode<T> right, BinaryOperator<T> operator) {
        this.left = left;
        this.right = right;
        this.operator = operator;
    }

    /**
     * Computes the value of this node dynamically by
     * applying the operator to the values of the child nodes.
     */
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
