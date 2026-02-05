package com.jinwang;

import java.util.Optional;

public class MyApp {

    public static void main(String[] args) {
        System.out.println(">>> Chapter 9 – Exercise 1: Convert to Optional <<<");

        Exercise01 exercise1 = new Exercise01();

        Optional<Customer> result1 = exercise1.findCustomerByEmailAddress(Customer.CUSTOMERS, "wj@example.com");
        System.out.println(result1.map(Customer::toString).orElse("Not found"));

        Optional<Customer> result2 = exercise1.findCustomerByEmailAddress(Customer.CUSTOMERS, "notfound@example.com");
        System.out.println(result2.map(Customer::toString).orElse("Not found"));

        System.out.println("✅ Exercise 1 complete.\n");
    }
}
