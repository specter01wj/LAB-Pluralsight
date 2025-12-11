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
        var idToProduct = new HashMap<Integer, Product>();
        idToProduct.put(1, ProductFixtures.door);
        idToProduct.put(2, ProductFixtures.floorPanel);
        idToProduct.put(3, ProductFixtures.window);

        var ids = idToProduct.keySet();
        System.out.println(ids);
        System.out.println(idToProduct);

        
        System.out.println();
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

}
