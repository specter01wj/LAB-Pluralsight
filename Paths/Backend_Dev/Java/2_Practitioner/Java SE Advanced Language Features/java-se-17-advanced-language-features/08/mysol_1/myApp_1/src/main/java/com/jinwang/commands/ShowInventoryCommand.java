package com.jinwang.commands;

import com.jinwang.Command;
import com.jinwang.SessionState;
import com.jinwang.UserInput;
import com.jinwang.model.Product;

import java.util.Comparator;

@Command(value = "inventory", order = 20, description = "List available products.")
public class ShowInventoryCommand implements CommandExecutor {

    @Override
    public void execute(SessionState sessionState, UserInput userInput) {
        System.out.println("Available products:");
        Product.PRODUCTS_BY_ID.values().stream()
                .sorted(Comparator.comparing(Product::id))
                .forEach(product -> System.out.printf("[%6d] %-10s $ %6s - %s%n",
                        product.id(), product.name(), product.price(), product.description()));
    }
}
