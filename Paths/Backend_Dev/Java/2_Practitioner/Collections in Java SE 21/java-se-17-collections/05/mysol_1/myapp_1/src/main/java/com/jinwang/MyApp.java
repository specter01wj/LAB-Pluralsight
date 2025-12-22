package com.jinwang;

import com.common.Product;

import java.util.*;
import static java.util.Comparator.comparingInt;
import static java.util.stream.Collectors.*;

public class MyApp {

    public static void main(String[] args) {
        // StreamProducts
        /*Product door = new Product(1, "Wooden Door", 35);
        Product floorPanel = new Product(2, "Floor Panel", 25);
        Product window = new Product(3, "Glass Window", 10);

        List<Product> products = List.of(door, floorPanel, window, floorPanel, window);

        System.out.println("Using Streams:");
        System.out.println(namesOfLightProductsSorted(products));

        System.out.println("\nUsing Classic Loop:");
        System.out.println(namesOfLightProductsSortedLoop(products));*/

        // EnterTheCollector
        // Step 1: Sample data setup
        Product door = new Product(1, "Wooden Door", 35);
        Product floorPanel = new Product(2, "Floor Panel", 25);



        
        Product window = new Product(3, "Glass Window", 10);

        List<Product> products = List.of(
                door, floorPanel, window, floorPanel, window, floorPanel
        );

        // Step 2: Stream pipeline
        Map<String, Long> lightProductCounts = products.stream()
                .filter(product -> product.getWeight() < 30)                 // Filter light products (<30kg)
                .sorted(comparingInt(Product::getWeight))                    // Sort by weight (ascending)
                .collect(groupingBy(Product::getName, counting()));          // Group by name and count occurrences

        // Step 3: Output result
        System.out.println("Grouped and counted light products:");
        lightProductCounts.forEach((name, count) ->
                System.out.println("- " + name + ": " + count));
    }

    // ✅ Stream version: concise and expressive
    private static List<String> namesOfLightProductsSorted(List<Product> products) {
        return products.stream()
                .filter(product -> product.getWeight() < 30)
                .sorted(comparingInt(Product::getWeight))
                .map(Product::getName)
                .toList();  // Java 16+, otherwise use .collect(Collectors.toList())
    }

    // ✅ Loop version: verbose but equivalent logic
    private static List<String> namesOfLightProductsSortedLoop(List<Product> products) {
        List<Product> lightProducts = new ArrayList<>();

        for (Product product : products) {
            if (product.getWeight() < 30) {
                lightProducts.add(product);
            }
        }

        lightProducts.sort(comparingInt(Product::getWeight));

        List<String> productNames = new ArrayList<>();
        for (Product product : lightProducts) {
            productNames.add(product.getName());
        }

        return Collections.unmodifiableList(productNames);
    }
}
