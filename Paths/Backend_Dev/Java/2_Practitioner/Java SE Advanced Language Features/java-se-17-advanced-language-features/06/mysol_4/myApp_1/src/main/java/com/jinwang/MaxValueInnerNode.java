package com.jinwang;

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
        return (leftValue.compareTo(rightValue) >= 0) ? leftValue : rightValue;
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
