/*
 * This code is part of the course "Java SE Advanced Language Features" for Pluralsight.
 *
 * Copyright (C) 2024 by Jesper de Jong (jesper@jdj-it.com).
 */
package com.pluralsight.advancedjava.examples.example01;

import com.pluralsight.advancedjava.examples.example01.model.Customer;
import com.pluralsight.advancedjava.examples.example01.model.Order;

public class SessionState {

    private Customer customer;
    private Order.Builder orderBuilder = Order.builder();
    private boolean finished;

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    public Order.Builder getOrderBuilder() {
        return orderBuilder;
    }

    public void setOrderBuilder(Order.Builder orderBuilder) {
        this.orderBuilder = orderBuilder;
    }

    public boolean isFinished() {
        return finished;
    }

    public void setFinished(boolean finished) {
        this.finished = finished;
    }
}
