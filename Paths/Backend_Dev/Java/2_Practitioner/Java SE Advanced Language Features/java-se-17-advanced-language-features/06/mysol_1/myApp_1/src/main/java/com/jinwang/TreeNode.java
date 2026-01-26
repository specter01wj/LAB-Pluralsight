package com.jinwang;

// Node in a binary tree, which has a value and a left and right child node.
public interface TreeNode<T> {
    T getValue();
    TreeNode<T> getLeft();
    TreeNode<T> getRight();
}
