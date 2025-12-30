/*
 * This code is part of the course "Java SE Advanced Language Features" for Pluralsight.
 *
 * Copyright (C) 2024 by Jesper de Jong (jesper@jdj-it.com).
 */
package com.pluralsight.advancedjava.examples.example08;

/**
 * Example 8: Type erasure.
 */
public class AdvancedGenericsExample08 {

    public static void main(String[] args) {
        // Type erasure simply removes type arguments, as if the code was written without generics.
        var three = new LeafNode(3);
        var five = new LeafNode(5);

        var tree = new InnerNode(new LeafNode(2), new InnerNode(three, five));
        System.out.println(tree);
    }
}
