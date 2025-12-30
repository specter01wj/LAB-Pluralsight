/*
 * This code is part of the course "Java SE Advanced Language Features" for Pluralsight.
 *
 * Copyright (C) 2024 by Jesper de Jong (jesper@jdj-it.com).
 */
package com.pluralsight.advancedjava.examples.example10;

import java.math.BigDecimal;

import static com.pluralsight.advancedjava.examples.Validation.checkThat;

public record OrderLine(Product product, int quantity, BigDecimal price) {

    public OrderLine {
        checkThat(product != null, "product must not be null");
        checkThat(price != null, "price must not be null");
    }

    // Immutable objects obviously do not have setter methods. If you need a modified version of an immutable object, then you need to make a copy of the object
    // with different values for the fields you want to modify. "Wither" methods are a technique to do this in an elegant way.
    public OrderLine withQuantity(int newQuantity) {
        // Optimization: if the new quantity happens to be the same as the quantity of this object, then we don't need to create a copy, we just return "this".
        return newQuantity == this.quantity ? this : new OrderLine(this.product, newQuantity, this.price);
    }

    public OrderLine withPrice(BigDecimal newPrice) {
        return new OrderLine(this.product, this.quantity, newPrice);
    }
}
