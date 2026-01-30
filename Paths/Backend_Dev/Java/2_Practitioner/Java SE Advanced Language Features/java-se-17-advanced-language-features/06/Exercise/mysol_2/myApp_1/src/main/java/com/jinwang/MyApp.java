package com.jinwang;

public class MyApp {

    public static void main(String[] args) {
        System.out.println(">>> Chapter 6 – Exercise 2: Generic Methods <<<");

        var kv1 = new KeyValue<>("age", 42);
        var kv2 = kv1.mapValue(age -> "Age is " + age);

        System.out.println(kv1.key() + " = " + kv1.value());
        System.out.println(kv2.key() + " = " + kv2.value());

        System.out.println("\n✅ Exercise 2 complete.");
    }

}
