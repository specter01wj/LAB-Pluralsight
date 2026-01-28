package com.jinwang;

public class InnerNode implements TreeNode {

    private final TreeNode left;
    private final TreeNode right;

    public InnerNode(TreeNode left, TreeNode right) {
        this.left = left;
        this.right = right;
    }

    @Override
    public Object getValue() {
        return null; // no calculation here, structure only
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
        return "{" + left + ", " + right + "}";
    }
}
