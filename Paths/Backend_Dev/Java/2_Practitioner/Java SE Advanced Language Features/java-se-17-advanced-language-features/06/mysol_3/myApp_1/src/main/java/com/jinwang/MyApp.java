package com.jinwang;

public class MyApp {

    public static void main(String[] args) {
        System.out.println(">>> Advanced Generics: Generic Methods (Pair<T, U>) Study <<<\n");

        System.out.println("Step 1: Create Pair using explicit type parameters");
        var p1 = Pair.<Integer, String>of(1, "one");
        System.out.println("p1 = " + p1);

        System.out.println("\nStep 2: Create Pair using type inference");
        var p2 = Pair.of(2, "two");
        System.out.println("p2 = " + p2);

        System.out.println("\nStep 3: Create new Pair with updated first value");
        var p3 = p1.withFirst(3);
        System.out.println("p3 = " + p3);

        System.out.println("\nStep 4: Map p3 to reverse types");
        var p4 = p3.map((left, right) -> Pair.of(right, left));
        System.out.println("p4 = " + p4);

        System.out.println("\n✅ Study complete.");
    }

}
