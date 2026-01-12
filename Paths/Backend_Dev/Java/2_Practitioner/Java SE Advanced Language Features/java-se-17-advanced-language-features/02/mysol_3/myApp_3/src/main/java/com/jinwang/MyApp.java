package com.jinwang;

public class MyApp {

    public static void main(String[] args) {
        // Create a Customer with a null name; accessor will return "anonymous"
        var customer = new Customer(500567L, null, null);
        System.out.println("Customer name: " + customer.name());

        // Copy the customer using accessors. This introduces inconsistency:
        // The original had `name == null`, but the copy has `name == "anonymous"`
        var copy = new Customer(customer.id(), customer.name(), customer.email());

        System.out.println("\nCopy equals original? " + copy.equals(customer)); // false
        System.out.println("\nOriginal customer: " + customer);
        System.out.println("Copied customer:   " + copy);
    }

}
