package com.jinwang;

public class MyApp {

    public static void main(String[] args) {
        var customer = new Customer(500567L, null, null);
        var copy = new Customer(customer.id(), customer.name(), customer.email());

        System.out.println("Original customer: " + customer);
        System.out.println("Copied customer:   " + copy);

        // Even though name differs internally, equality is based only on 'id'
        boolean isEqual = copy.equals(customer);
        System.out.println("Copy equals original? " + isEqual);
    }

}
