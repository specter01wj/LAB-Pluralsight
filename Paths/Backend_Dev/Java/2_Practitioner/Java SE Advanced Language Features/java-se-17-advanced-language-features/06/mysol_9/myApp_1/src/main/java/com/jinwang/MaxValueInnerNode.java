package com.jinwang;

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
        return leftValue.compareTo(rightValue) >= 0 ? leftValue : rightValue;
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
