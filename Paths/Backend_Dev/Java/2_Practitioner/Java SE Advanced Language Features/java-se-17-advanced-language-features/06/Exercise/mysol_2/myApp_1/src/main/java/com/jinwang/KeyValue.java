package com.jinwang;

import java.util.function.Function;

public record KeyValue<K, V>(K key, V value) {

    // Generic instance method
    public <R> KeyValue<K, R> mapValue(Function<? super V, ? extends R> mapper) {
        return new KeyValue<>(key, mapper.apply(value));
    }
}
