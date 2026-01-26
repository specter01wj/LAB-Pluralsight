package com.jinwang;

import java.util.List;

public class MyApp {

    public static void main(String[] args) {
        System.out.println(">>> Advanced Generics: Multiple Type Parameter Bounds Study <<<\n");

        System.out.println("Step 1: Create List of Products");
        var products = List.of(
                new Product(100346L, "Bread", "Whole-wheat loaf"),
                new Product(100252L, "Cheese", "Gouda cheese"),
                new Product(100123L, "Apples", "Tasty red apples")
        );

        System.out.println("Original list:");
        products.forEach(p -> System.out.printf("• %d | %s | %s%n", p.id(), p.name(), p.description()));

        System.out.println("\nStep 2: Sort by ID and extract names");
        var names = sortByIdAndExtractNames(products);
        System.out.println("Sorted names by ID: " + names);

        System.out.println("\n✅ Study complete.");
    }

    static <T extends HasId & HasName> List<String> sortByIdAndExtractNames(List<T> list) {
        return list.stream()
                .sorted(java.util.Comparator.comparing(HasId::id))
                .map(HasName::name)
                .toList();
    }

}
