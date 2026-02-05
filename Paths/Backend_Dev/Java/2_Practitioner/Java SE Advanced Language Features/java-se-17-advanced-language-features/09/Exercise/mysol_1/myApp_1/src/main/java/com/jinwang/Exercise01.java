package com.jinwang;

import java.util.List;
import java.util.Optional;

public class Exercise01 {

    public Optional<Customer> findCustomerByEmailAddress(List<Customer> customers, String emailAddress) {
        return customers.stream()
                .filter(c -> c.emailAddress().equalsIgnoreCase(emailAddress))
                .findFirst();
    }
}
