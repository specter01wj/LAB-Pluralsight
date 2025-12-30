/*
 * This code is part of the course "Java SE Advanced Language Features" for Pluralsight.
 *
 * Copyright (C) 2024 by Jesper de Jong (jesper@jdj-it.com).
 */
package com.pluralsight.advancedjava.examples.example03;

import java.util.function.BiFunction;

public record Pair<T, U>(T first, U second) {

    // A static method with type parameters.
    public static <V, W> Pair<V, W> of(V first, W second) {
        return new Pair<>(first, second);
    }

    // Note that static method cannot access the type parameters of their enclosing class. So leaving out the type parameters from the method and trying
    // to use those that are defined on the record itself does not work:
    //     public static Pair<T, U> of(T first, U second)

    // Instance methods do have access to the type parameters of their enclosing class, so these wither methods can use the type parameters T and U.
    public Pair<T, U> withFirst(T newFirst) {
        return Pair.of(newFirst, second);
    }

    public Pair<T, U> withSecond(U newSecond) {
        return Pair.of(first, newSecond);
    }

    // A generic instance method, which is an instance method that has its own type parameters V and W.
    public <V, W> Pair<V, W> map(BiFunction<T, U, Pair<V, W>> fn) {
        return fn.apply(first, second);
    }
}
