package com.jinwang;

import java.util.List;

public class Exercise02 {

    public static String getCustomerName(List<Customer> customers, long customerId) {
        return customers.stream()
                .filter(customer -> customer.id() == customerId)
                .findAny()
                .map(Customer::name)
                .orElse("UNKNOWN");
    }
}
