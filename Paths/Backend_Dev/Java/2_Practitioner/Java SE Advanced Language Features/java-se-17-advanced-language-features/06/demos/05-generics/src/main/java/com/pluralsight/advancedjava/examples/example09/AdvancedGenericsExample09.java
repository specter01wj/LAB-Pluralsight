/*
 * This code is part of the course "Java SE Advanced Language Features" for Pluralsight.
 *
 * Copyright (C) 2024 by Jesper de Jong (jesper@jdj-it.com).
 */
package com.pluralsight.advancedjava.examples.example09;

/**
 * Example 9: Type erasure with bounded type parameters.
 */
public class AdvancedGenericsExample09 {

    public static void main(String[] args) {
        var tree = new MaxValueInnerNode(new LeafNode(2), new MaxValueInnerNode(new LeafNode(3), new LeafNode(5)));
        System.out.println(tree.getValue());
    }
}
