/*
 * This code is part of the course "Java SE Advanced Language Features" for Pluralsight.
 *
 * Copyright (C) 2024 by Jesper de Jong (jesper@jdj-it.com).
 */
package com.pluralsight.advancedjava.examples.example01.commands;

import com.pluralsight.advancedjava.examples.example01.Command;
import com.pluralsight.advancedjava.examples.example01.SessionState;
import com.pluralsight.advancedjava.examples.example01.UserInput;
import com.pluralsight.advancedjava.examples.example01.model.Product;

import java.util.Comparator;

@Command(value = "inventory", order = 20, description = "List available products.")
public class ShowInventoryCommand implements CommandExecutor {

    @Override
    public void execute(SessionState sessionState, UserInput userInput) {
        System.out.println("Available products:");
        Product.PRODUCTS_BY_ID.values().stream()
                .sorted(Comparator.comparing(Product::id))
                .forEach(product -> System.out.printf("[%6d] %-10s $ %6s - %s%n", product.id(), product.name(), product.price(), product.description()));
    }
}
