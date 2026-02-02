package com.jinwang.commands;

import com.jinwang.Command;
import com.jinwang.SessionState;
import com.jinwang.UserInput;
import com.jinwang.model.OrderLine;
import com.jinwang.model.Product;

import java.math.BigDecimal;

@Command(value = "add", order = 30, description = "Add products to your shopping cart.")
public class AddToShoppingCartCommand implements CommandExecutor {

    @Override
    public void execute(SessionState sessionState, UserInput userInput) {
        if (userInput.arguments().length != 2) {
            System.out.println("Usage: add <quantity> <product id>");
            return;
        }

        int quantity;
        try {
            quantity = Integer.parseInt(userInput.arguments()[0]);
        } catch (NumberFormatException e) {
            System.out.println("Not a valid quantity: " + userInput.arguments()[0]);
            return;
        }

        long productId;
        try {
            productId = Long.parseLong(userInput.arguments()[1]);
        } catch (NumberFormatException e) {
            System.out.println("Not a valid product id: " + userInput.arguments()[1]);
            return;
        }

        var product = Product.PRODUCTS_BY_ID.get(productId);
        if (product == null) {
            System.out.println("Unknown product id: " + productId);
            System.out.println("Try 'inventory' to list available products.");
            return;
        }

        var amount = product.price().multiply(BigDecimal.valueOf(quantity));
        sessionState.getOrderBuilder().addLine(new OrderLine(product, quantity, amount));
        System.out.printf("Added to your shopping cart: %d x %s - $ %s%n", quantity, product.name(), amount);
    }
}
