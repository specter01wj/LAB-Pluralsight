package com.jinwang;

public class MyApp {

    public static void main(String[] args) {
        // Test ProductCls (immutable class)
        ProductCls clsProduct1 = new ProductCls(101, "Laptop", "High-end gaming laptop");
        ProductCls clsProduct2 = new ProductCls(101, "Laptop", "High-end gaming laptop");

        System.out.println("== Testing ProductCls ==");
        System.out.println(clsProduct1);
        System.out.println("Equal? " + clsProduct1.equals(clsProduct2));
        System.out.println("HashCode: " + clsProduct1.hashCode());
        System.out.println("Name: " + clsProduct1.getName());

        // Test ProductRec (record)
        ProductRec recProduct1 = new ProductRec(202, "Monitor", "27-inch 4K monitor");
        ProductRec recProduct2 = new ProductRec(202, "Monitor", "27-inch 4K monitor");

        System.out.println("\n== Testing ProductRec ==");
        System.out.println(recProduct1);
        System.out.println("Equal? " + recProduct1.equals(recProduct2));
        System.out.println("HashCode: " + recProduct1.hashCode());
        System.out.println("Name: " + recProduct1.name());
    }

}
