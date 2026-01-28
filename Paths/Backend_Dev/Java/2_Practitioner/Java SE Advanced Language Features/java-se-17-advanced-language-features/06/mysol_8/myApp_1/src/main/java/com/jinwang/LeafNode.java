package com.jinwang;

public class LeafNode implements TreeNode {

    private final Object value;

    public LeafNode(Object value) {
        this.value = value;
    }

    @Override
    public Object getValue() {
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
        return "[" + value + "]";
    }
}
