/*
 * This code is part of the course "Java SE Advanced Language Features" for Pluralsight.
 *
 * Copyright (C) 2024 by Jesper de Jong (jesper@jdj-it.com).
 */
package com.pluralsight.advancedjava.examples.example05;

import java.util.Comparator;
import java.util.List;

/**
 * Example 5: Multiple type parameter bounds.
 */
public class AdvancedGenericsExample05 {

    public static void main(String[] args) {
        var products = List.of(
                new Product(100346L, "Bread", "Whole-wheat loaf"),
                new Product(100252L, "Cheese", "Gouda cheese"),
                new Product(100123L, "Apples", "Tasty red apples"));

        var names = sortByIdAndExtractNames(products);
        System.out.println(names);
    }

    // Non-generic method to sort products by id and return a list containing the names of the products.
//    static List<String> sortByIdAndExtractNames(List<Product> list) {
//        return list.stream().sorted(Comparator.comparing(Product::id)).map(Product::name).toList();
//    }

    // Generic method which can sort a list of any kind of object that implements both interfaces HasId and HasName.
    // The type parameter T of this method has two bounds on its type parameter.
    static <T extends HasId & HasName> List<String> sortByIdAndExtractNames(List<T> list) {
        return list.stream().sorted(Comparator.comparing(HasId::id)).map(HasName::name).toList();
    }
}
