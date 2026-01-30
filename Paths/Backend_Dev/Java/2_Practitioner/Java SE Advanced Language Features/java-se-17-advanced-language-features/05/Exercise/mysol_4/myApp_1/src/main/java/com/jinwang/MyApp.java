package com.jinwang;

import java.util.ArrayList;
import java.util.List;

public class MyApp {

    public static void main(String[] args) {
        System.out.println(">>> Chapter 5 – Exercise 4: Anonymous Class <<<");

        List<Product> products = new ArrayList<>();
        products.add(new Product(101, "Banana", "Fresh bananas"));
        products.add(new Product(102, "Apple", "Red apples"));
        products.add(new Product(103, "Carrot", "Organic carrots"));

        Exercise04 exercise = new Exercise04();
        exercise.sortProductsByName(products);

        for (Product product : products) {
            System.out.printf("• %s%n", product.name());
        }

        System.out.println("\n✅ Exercise 4 complete.");
    }

}
