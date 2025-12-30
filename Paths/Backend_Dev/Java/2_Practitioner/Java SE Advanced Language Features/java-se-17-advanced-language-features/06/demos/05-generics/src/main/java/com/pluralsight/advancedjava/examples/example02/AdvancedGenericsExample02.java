/*
 * This code is part of the course "Java SE Advanced Language Features" for Pluralsight.
 *
 * Copyright (C) 2024 by Jesper de Jong (jesper@jdj-it.com).
 */
package com.pluralsight.advancedjava.examples.example02;

/**
 * Example 2: Extending a generic type.
 */
public class AdvancedGenericsExample02 {

    public static void main(String[] args) {
        var tree = new IntegerSummingInnerNode(new LeafNode<>(2), new IntegerSummingInnerNode(new LeafNode<>(3), new LeafNode<>(5)));
        System.out.println(tree);
    }
}
