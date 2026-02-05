package com.jinwang;

import java.util.List;

public class MyApp {
    public static void main(String[] args) {
        System.out.println(">>> Chapter 9 – Exercise 2: Optional with Streams <<<");

        List<Customer> customers = Customer.CUSTOMERS;

        System.out.println(Exercise02.getCustomerName(customers, 923461L)); // Susan Jones
        System.out.println(Exercise02.getCustomerName(customers, 123456L)); // UNKNOWN

        System.out.println("✅ Exercise 2 complete.\n");
    }
}