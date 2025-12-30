/*
 * This code is part of the course "Java SE Advanced Language Features" for Pluralsight.
 *
 * Copyright (C) 2024 by Jesper de Jong (jesper@jdj-it.com).
 */
package com.pluralsight.advancedjava.exercises.exercise02;

import static org.assertj.core.api.Assertions.assertThat;

public class KeyValueTest {

    public void run() {
        record Key(int value) {}
        record InValue(int value) {}
        record OutValue(int value) {}

        KeyValue<Key, OutValue> result = new KeyValue<>(new Key(123), new InValue(456)).mapValue(v -> new OutValue(v.value() * 2));

        // The 'mapValue' method must apply the supplied function to the value and return a new KeyValue with the expected key and value
        assertThat(result).as("The 'mapValue' method must not return null").isNotNull();
        assertThat(result).as("The 'mapValue' method must return a KeyValue").isInstanceOf(KeyValue.class);
        assertThat(result.key()).as("The key of the KeyValue returned by the 'mapValue' method is wrong").isEqualTo(new Key(123));
        assertThat(result.value()).as("The value of the KeyValue returned by the 'mapValue' method is wrong").isEqualTo(new OutValue(912));
    }
}
