/*
 * This code is part of the course "Java SE Advanced Language Features" for Pluralsight.
 *
 * Copyright (C) 2024 by Jesper de Jong (jesper@jdj-it.com).
 */
package com.pluralsight.advancedjava.examples.example02;

// A non-generic class (it does not have type parameters itself) which extends a generic class.
// Note that in the 'extends' clause, we specify the concrete type Integer as the type argument.
public class IntegerSummingInnerNode extends InnerNode<Integer> {

    public IntegerSummingInnerNode(TreeNode<Integer> left, TreeNode<Integer> right) {
        super(left, right, Integer::sum);
    }

    @Override
    public String toString() {
        return String.format("{[%s]: {%s, %s}}", getValue(), getLeft(), getRight());
    }
}
