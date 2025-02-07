package com.jinwang;

import com.common.Product;

import java.util.Arrays;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Iterator;
import java.util.List;

public class MyApp {

    public static void main(String[] args) {

        // TheArrayProblem
        /*var door = new Product("Wooden Door", 35);
        var floorPanel = new Product("Floor Panel", 25);
        var window = new Product("Glass Window", 10);

        // Create
        Product[] products = {door, floorPanel, window};

        // Print
        System.out.println(Arrays.toString(products));

        // Add
        var roof = new Product("Flat Roof", 1000);
        products = add(roof, products);
        System.out.println(Arrays.toString(products));

        // Duplicate
        products = add(roof, products);
        System.out.println(Arrays.toString(products));*/


        // CollectionConcepts
        var door = new Product("Wooden Door", 35);
        var floorPanel = new Product("Floor Panel", 25);
        var window = new Product("Glass Window", 10);

        Collection<Product> products = new ArrayList<>();
        products.add(door);
        products.add(floorPanel);
        products.add(window);

        System.out.println(products);

        for (var product : products) {
            System.out.println(product);
        }

        /*
        var toRemove = new ArrayList<Product>();
        toRemove.add(door);
        toRemove.add(floorPanel);

        products.removeAll(toRemove);
        System.out.println(products);*/
    }

    private static Product[] add(Product product, Product[] array) {
        int length = array.length;
        var newArray = Arrays.copyOf(array, length + 1);
        newArray[length] = product;
        return newArray;
    }

}
