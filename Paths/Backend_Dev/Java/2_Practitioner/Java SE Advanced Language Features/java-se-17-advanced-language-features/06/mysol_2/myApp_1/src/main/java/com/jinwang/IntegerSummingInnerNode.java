package com.jinwang;

public class IntegerSummingInnerNode extends InnerNode<Integer> {

    public IntegerSummingInnerNode(TreeNode<Integer> left, TreeNode<Integer> right) {
        super(left, right, Integer::sum);
    }

    @Override
    public String toString() {
        return String.format("{[%d]: %s, %s}", getValue(), getLeft(), getRight());
    }
}
