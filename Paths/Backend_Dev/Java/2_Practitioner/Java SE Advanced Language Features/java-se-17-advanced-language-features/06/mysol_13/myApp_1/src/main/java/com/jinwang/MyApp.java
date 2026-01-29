package com.jinwang;

import java.util.HashMap;
import java.util.Map;

public class MyApp {

    public static void main(String[] args) {
        System.out.println(">>> Advanced Generics: Varargs and Non-Reifiable Types <<<\n");

        // Step 1: Test varargs with printLines()
        System.out.println("Step 1: Varargs method with String...");
        printLines("Hello World", "How are you?");
        System.out.println();

        // Step 2: Create map and put pairs via varargs
        System.out.println("Step 2: Use varargs with generic Pair<T, U>");
        Map<Integer, String> map = new HashMap<>();
        putIntoMap(map, new Pair<>(1, "one"), new Pair<>(2, "two"));
        System.out.println("Map content after putIntoMap(): " + map);
        System.out.println();

        System.out.println("✅ Study complete.");
    }

    static void printLines(String... lines) {
        for (String line : lines) {
            System.out.println("• " + line);
        }
    }

    @SafeVarargs
    static <T, U> void putIntoMap(Map<? super T, ? super U> map, Pair<? extends T, ? extends U>... pairs) {
        for (var pair : pairs) {
            map.put(pair.first(), pair.second());
        }

        // Uncommenting this would break type safety:
        // Object[] array = pairs;
        // array[0] = new Pair<Long, Long>(2L, 3L); // ❌ Heap pollution
    }

}

record Pair<T, U>(T first, U second) {}
