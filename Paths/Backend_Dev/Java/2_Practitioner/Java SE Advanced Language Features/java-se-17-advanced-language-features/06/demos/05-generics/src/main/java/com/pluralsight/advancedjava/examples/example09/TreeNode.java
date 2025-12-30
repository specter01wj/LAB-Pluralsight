/*
 * This code is part of the course "Java SE Advanced Language Features" for Pluralsight.
 *
 * Copyright (C) 2024 by Jesper de Jong (jesper@jdj-it.com).
 */
package com.pluralsight.advancedjava.examples.example09;

/**
 * Example 9: Type erasure with bounded type parameters.
 * <p>
 * This is what it would look like after type erasure: the type parameter T has been discarded
 * and all occurrences of T have been replaced by its bound: Comparable.
 */
public interface TreeNode {

    Comparable getValue();

    TreeNode getLeft();

    TreeNode getRight();
}
