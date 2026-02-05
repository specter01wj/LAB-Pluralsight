package com.jinwang;

import java.util.List;

public class MyApp {
    public static void main(String[] args) {
        System.out.println(">>> Chapter 9 – Exercise 3: Stream<Optional<Customer>> to Stream<Customer> <<<");

        List<String> emails = List.of(
                "joe.smith@example.com",         // exists
                "nonexistent@example.com",       // not found
                "susan.jones@example.com",       // exists
                "lmiller@example.com",           // exists
                "doesnotexist@example.com"       // not found
        );

        List<Customer> matchedCustomers = Exercise03.findCustomersByEmailAddresses(emails);
        matchedCustomers.forEach(System.out::println);

        System.out.println("✅ Exercise 3 complete.\n");
    }
}
