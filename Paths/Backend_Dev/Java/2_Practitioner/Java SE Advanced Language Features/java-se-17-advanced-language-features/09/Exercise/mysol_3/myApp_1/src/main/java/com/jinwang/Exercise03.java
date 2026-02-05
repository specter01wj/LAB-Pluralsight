package com.jinwang;

import java.util.List;
import java.util.Optional;

public class Exercise03 {

    public static List<Customer> findCustomersByEmailAddresses(List<String> emailAddresses) {
        return emailAddresses.stream()
                .map(emailAddress -> Optional.ofNullable(findCustomerByEmailAddress(emailAddress)))
                .flatMap(Optional::stream)
                .toList();
    }

    // Do not modify this method per exercise instructions
    private static Customer findCustomerByEmailAddress(String emailAddress) {
        for (Customer customer : Customer.CUSTOMERS) {
            if (customer.emailAddress().equals(emailAddress)) {
                return customer;
            }
        }
        return null;
    }
}
