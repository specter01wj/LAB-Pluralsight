/*
 * This code is part of the course "Java SE Advanced Language Features" for Pluralsight.
 *
 * Copyright (C) 2024 by Jesper de Jong (jesper@jdj-it.com).
 */
package com.pluralsight.advancedjava.examples.example01;

/**
 * Example 1: Defining a generic type.
 */
public class AdvancedGenericsExample01 {

    public static void main(String[] args) {
        // When you create an instance of a generic type, you have to specify a type argument to fill in the type parameter.
        // This is the same as for normal value parameters: you specify an argument that fills in the parameter.
        var three = new LeafNode<Integer>(3);

        // Type inference allows you to omit the type argument: the compiler infers the right type by looking at the type of the value.
        var five = new LeafNode<>(5);

        var tree = new InnerNode<>(new LeafNode<>(2), new InnerNode<>(three, five));
        System.out.println(tree);
    }
}
