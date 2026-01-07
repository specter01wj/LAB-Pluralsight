package com.jinwang;

public class MyApp {

    public static void main(String[] args) {
        // Create a Product record instance
        Product product = new Product(100123L, "Apples", "Tasty red apples");

        // Use the accessor methods and the custom method
        System.out.printf("Product '%s' has ID: %d%n", product.name(), product.id());
        System.out.println("Does this product have a description? " + product.hasDescription());
    }

}
