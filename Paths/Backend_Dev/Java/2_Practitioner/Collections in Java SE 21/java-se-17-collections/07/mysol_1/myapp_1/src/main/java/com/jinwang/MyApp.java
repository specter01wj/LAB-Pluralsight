package com.jinwang;

import com.common.Product;
import com.common.Supplier;

import java.util.*;

public class MyApp {

    public static void main(String[] args) {
        // Create products
        Product door = new Product("Wooden Door", 35);
        Product window = new Product("Glass Window", 10);
        Product floorPanel = new Product("Floor Panel", 25);

        // Create suppliers
        Supplier supplier1 = new Supplier("Supplier One");
        supplier1.getProducts().add(door);
        supplier1.getProducts().add(window);

        Supplier supplier2 = new Supplier("Supplier Two");
        supplier2.getProducts().add(floorPanel);
        supplier2.getProducts().add(window); // duplicate product

        // Create catalogue and add suppliers
        ProductCatalogue catalogue = new ProductCatalogue();
        catalogue.addSupplier(supplier1);
        catalogue.addSupplier(supplier2);

        // Print the contents of the catalogue
        System.out.println("Product Catalogue:");
        for (Product product : catalogue) {
            System.out.println(product);
        }
    }

}
