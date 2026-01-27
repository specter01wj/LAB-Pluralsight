package com.jinwang;


import java.util.ArrayList;
import java.util.List;

public class MyApp {

    public static void main(String[] args) {
        System.out.println(">>> Advanced Generics: Wildcards (? extends) <<<\n");

        System.out.println("Step 1: Create List<Dog>");
        List<Dog> dogs = new ArrayList<>();
        dogs.add(new Dog("Daisy"));
        dogs.add(new Dog("Lucky"));
        dogs.forEach(d -> System.out.println("• Dog: " + d.name()));

        System.out.println("\nStep 2: Assign List<Dog> to List<? extends Animal>");
        List<? extends Animal> animals = dogs;
        System.out.println("✅ Allowed: List<Dog> IS compatible with List<? extends Animal>");

        System.out.println("\nStep 3: Try adding Cat to List<? extends Animal>");
        System.out.println("⛔ Not allowed! Compiler error.");
        System.out.println("// animals.add(new Cat(\"Luna\")); // ❌ Compile Error");

        System.out.println("\nStep 4: Try adding Dog to List<? extends Animal>");
        System.out.println("⛔ Still not allowed!");
        System.out.println("// animals.add(new Dog(\"Max\")); // ❌ Compile Error");

        System.out.println("\n✅ Key takeaway:");
        System.out.println("List<? extends Animal> is **read-only** — we can read but NOT write.");

        System.out.println("\n✅ Study complete.\n");
    }

}
