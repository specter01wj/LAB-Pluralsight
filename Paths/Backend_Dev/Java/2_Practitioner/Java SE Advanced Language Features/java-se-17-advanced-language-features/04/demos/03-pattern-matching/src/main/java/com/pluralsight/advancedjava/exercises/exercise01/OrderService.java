/*
 * This code is part of the course "Java SE Advanced Language Features" for Pluralsight.
 *
 * Copyright (C) 2024 by Jesper de Jong (jesper@jdj-it.com).
 */
package com.pluralsight.advancedjava.exercises.exercise01;

import com.pluralsight.advancedjava.examples.model.Order;
import com.pluralsight.advancedjava.examples.model.OrderLine;
import com.pluralsight.advancedjava.examples.model.SaleOrderLine;

/**
 * Exercise 1: Using pattern matching with instanceof.
 * <p>
 * TODO: Rewrite the code in the method containsSaleOfProduct() below by using pattern matching in the instanceof expression.
 *       Remove the type cast.
 *       As a second step, replace the nested if-statements by a single if-statement.
 *       Run the included unit test {@link Exercise01Test} to check if the method still works correctly after your changes.
 */
public class OrderService {

    public boolean containsSaleOfProduct(Order order, int productId) {
        for (OrderLine line : order.lines()) {
            if (line instanceof SaleOrderLine) {
                SaleOrderLine sale = (SaleOrderLine) line;
                if (sale.product().id() == productId) {
                    return true;
                }
            }
        }
        return false;
    }
}
