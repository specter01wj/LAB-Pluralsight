/*
 * This code is part of the course "Java SE Advanced Language Features" for Pluralsight.
 *
 * Copyright (C) 2024 by Jesper de Jong (jesper@jdj-it.com).
 */
package com.pluralsight.advancedjava.examples.example04;

// Node in a binary tree, which has a value and a left and right child node.
// The type parameter is bounded; this means that you can only fill in the type parameter T with an argument type that implements interface Comparable.
public interface TreeNode<T extends Comparable<T>> {

    T getValue();

    TreeNode<T> getLeft();

    TreeNode<T> getRight();
}
