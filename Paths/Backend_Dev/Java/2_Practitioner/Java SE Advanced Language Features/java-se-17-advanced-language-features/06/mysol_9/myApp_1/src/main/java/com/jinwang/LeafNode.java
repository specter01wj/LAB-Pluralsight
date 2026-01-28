package com.jinwang;

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
