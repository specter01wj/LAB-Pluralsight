package com.jinwang;

import com.common.Product;
import com.common.Shipment;

import java.util.*;

public class MyApp {

    private static final Product door = new Product("Wooden Door", 35);
    private static final Product floorPanel = new Product("Floor Panel", 25);
    private static final Product window = new Product("Glass Window", 10);

    public static void main(String[] args) {
        // ShipmentsBreaker
        Shipment shipment = new Shipment();

        shipment.add(door);
        shipment.add(window);
        shipment.add(door);
        shipment.add(window);
        shipment.add(floorPanel);

        shipment.prepare();

        List<Product> lightVanProducts = shipment.getLightVanProducts();
        System.out.println("Light Van Products (initial): " + lightVanProducts);

        // This will throw UnsupportedOperationException
        try {
            lightVanProducts.remove(window);
        } catch (UnsupportedOperationException e) {
            System.out.println("Attempted to remove from an unmodifiable list!");
        }

        System.out.println("Light Van Products (after attempted removal): " + shipment.getLightVanProducts());

        System.out.println("Full Shipment Contents:");
        shipment.forEach(System.out::println);

    }

}
