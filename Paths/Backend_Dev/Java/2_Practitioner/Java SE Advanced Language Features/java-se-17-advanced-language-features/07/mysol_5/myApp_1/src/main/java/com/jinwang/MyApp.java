package com.jinwang;

import java.math.BigDecimal;
import java.util.List;
import java.util.TreeSet;
import java.util.stream.Collectors;

public class MyApp {

    static boolean isExpensive(Product product) {
        return product.price().compareTo(new BigDecimal("4.00")) >= 0;
    }

    record Product(long id, String name, BigDecimal price) {}

    public static void main(String[] args) {
        System.out.println(">>> Chapter 7 – Example 5: Method References <<<");

        var products = List.of(
                new Product(100123L, "Apples", new BigDecimal("2.25")),
                new Product(100578L, "Oranges", new BigDecimal("4.09")),
                new Product(100393L, "Cheese", new BigDecimal("6.99")),
                new Product(100346L, "Bread", new BigDecimal("3.49")));

        var expensiveProducts = products.stream().filter(MyApp::isExpensive).toList();
        System.out.println("Expensive products:");
        expensiveProducts.forEach(System.out::println);

        var totalPrice = products.stream().map(Product::price).reduce(BigDecimal.ZERO, BigDecimal::add);
        System.out.println("Total price: " + totalPrice);

        var productNames = products.stream().map(Product::name).collect(Collectors.toCollection(TreeSet::new));
        System.out.println("Sorted product names: " + productNames);

        System.out.println("\n✅ Example 5 complete.");
    }

}
