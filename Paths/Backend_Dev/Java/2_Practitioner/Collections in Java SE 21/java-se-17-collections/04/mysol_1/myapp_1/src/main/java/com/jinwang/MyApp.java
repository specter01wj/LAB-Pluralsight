package com.jinwang;

import com.common.*;

import java.util.*;

public class MyApp {

    private static final int ITERATIONS = 5;
    private static final int NUMBER_OF_PRODUCTS = 20_000;
    private static final List<Product> products = generateProducts();

    public static void main(String[] args) {
        // LookupTableComparison
        /*runLookups(new MapProductLookupTable());
        runLookups(new NaiveProductLookupTable());*/

        // ViewsOverMaps
        ViewsOverMaps();

        // AdvancedOperations
    }

    private static List<Product> generateProducts() {
        final List<Product> products = new ArrayList<>();
        final Random weightGenerator = new Random();

        for (int i = 0; i < NUMBER_OF_PRODUCTS; i++) {
            products.add(new Product(i, "Product" + i, 10 + weightGenerator.nextInt(10)));
        }

        Collections.shuffle(products);
        Collections.shuffle(products);
        Collections.shuffle(products);

        return products;
    }

    private static void runLookups(final ProductLookupTable lookupTable) {
        System.out.println("Running lookups with " + lookupTable.getClass().getSimpleName());

        for (int i = 0; i < ITERATIONS; i++) {
            long startTime = System.currentTimeMillis();

            for (Product product : products) {
                lookupTable.addProduct(product);
            }

            for (Product product : products) {
                Product result = lookupTable.lookupById(product.getId());
                if (result != product) {
                    throw new IllegalStateException("Lookup Table returned wrong result for " + product);
                }
            }

            lookupTable.clear();

            System.out.println((System.currentTimeMillis() - startTime) + "ms");
        }
    }

    private static void ViewsOverMaps() {
        // Step 1: Initialize map with some ProductFixtures
        var idToProduct = new HashMap<Integer, Product>();
        idToProduct.put(1, ProductFixtures.door);
        idToProduct.put(2, ProductFixtures.floorPanel);
        idToProduct.put(3, ProductFixtures.window);

        // Step 2: keySet view (modifiable)
        var ids = idToProduct.keySet();
        System.out.println("Initial IDs: " + ids);
        System.out.println("Initial Map: " + idToProduct);
        System.out.println();

        // Remove an ID — reflects in the map
        ids.remove(1);
        // idToProduct.remove(2);
        System.out.println("IDs after removal: " + ids);
        System.out.println("Map after ID removal: " + idToProduct);
        System.out.println();

        // Step 3: values() view (modifiable)
        var products = idToProduct.values();
        System.out.println("Current products: " + products);
        System.out.println("Map before product removal: " + idToProduct);
        System.out.println();

        // Remove a product — reflects in the map
        products.remove(ProductFixtures.window);
        System.out.println("Products after removal: " + products);
        System.out.println("Map after product removal: " + idToProduct);
        System.out.println();

        // Step 4: entrySet() view — allows access to key-value pairs
        var entries = idToProduct.entrySet();
        System.out.println("Entries in map:");
        for (var entry : entries) {
            System.out.println("- Entry: " + entry);
            System.out.println("  Key: " + entry.getKey());
            System.out.println("  Value: " + entry.getValue());
            // Optionally modify the value (uncomment below)
            // entry.setValue(ProductFixtures.window);
        }


        // var entry = Map.entry(3, ProductFixtures.window);
        // entries.add(entry);
        // ❌ You can't do this: entries.add(Map.entry(...))
        // If you want to add a new entry:
        idToProduct.put(4, ProductFixtures.window);
        System.out.println("\nMap after adding new entry via put():");
        System.out.println(idToProduct);
    }

    private static void AdvancedOperations() {

    }

}
