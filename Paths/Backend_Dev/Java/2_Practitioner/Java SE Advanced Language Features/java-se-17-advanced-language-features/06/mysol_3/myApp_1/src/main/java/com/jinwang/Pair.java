package com.jinwang;

import java.util.function.BiFunction;

public record Pair<T, U>(T first, U second) {

    // Static factory method with type parameters
    public static <V, W> Pair<V, W> of(V first, W second) {
        return new Pair<>(first, second);
    }

    // Instance method that creates a new Pair with updated 'first'
    public Pair<T, U> withFirst(T newFirst) {
        return Pair.of(newFirst, second);
    }

    // Instance method that creates a new Pair with updated 'second'
    public Pair<T, U> withSecond(U newSecond) {
        return Pair.of(first, newSecond);
    }

    // Generic instance method that maps this pair to another pair using a BiFunction
    public <V, W> Pair<V, W> map(BiFunction<T, U, Pair<V, W>> fn) {
        return fn.apply(first, second);
    }
}
