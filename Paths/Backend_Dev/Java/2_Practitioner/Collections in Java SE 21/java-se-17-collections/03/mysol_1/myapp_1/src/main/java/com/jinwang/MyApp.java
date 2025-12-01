package com.jinwang;

import com.common.Product;

import java.util.*;

public class MyApp {

    public static void main(String[] args) {

        Shipment shipment = new Shipment();

        // Add products
        shipment.add(new Product("Laptop", 15));
        shipment.add(new Product("Desktop", 30));
        shipment.add(new Product("Monitor", 18));
        shipment.add(new Product("Printer", 25));



        
        shipment.add(new Product("Mouse", 2));

        System.out.println("Before prepare:");
        for (Product product : shipment) {
            System.out.println(product);
        }

        // Prepare shipment (sort and split)
        shipment.prepare();

        System.out.println("\nLight Van Products:");
        for (Product product : shipment.getLightVanProducts()) {
            System.out.println(product);
        }

        System.out.println("\nHeavy Van Products:");
        for (Product product : shipment.getHeavyVanProducts()) {
            System.out.println(product);
        }

        // Optional: strip heavy products from main list
        shipment.stripHeavyProducts();
        System.out.println("\nAfter stripping heavy products:");
        for (Product product : shipment) {
            System.out.println(product);
        }

    }

}
