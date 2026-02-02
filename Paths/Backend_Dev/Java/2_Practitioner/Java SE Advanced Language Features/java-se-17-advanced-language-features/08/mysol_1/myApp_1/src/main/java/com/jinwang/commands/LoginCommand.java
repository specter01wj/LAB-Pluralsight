package com.jinwang.commands;

import com.jinwang.Command;
import com.jinwang.SessionState;
import com.jinwang.UserInput;
import com.jinwang.model.Customer;

@Command(value = "login", order = 10, description = "Login to let the system know who's shopping.")
public class LoginCommand implements CommandExecutor {

    @Override
    public void execute(SessionState sessionState, UserInput userInput) {
        if (sessionState.getCustomer() != null) {
            System.out.println("You are already logged in as: " + sessionState.getCustomer().name());
            return;
        }

        if (userInput.arguments().length != 1) {
            System.out.println("Usage: login <customer id>");
            return;
        }

        long customerId;
        try {
            customerId = Long.parseLong(userInput.arguments()[0]);
        } catch (NumberFormatException e) {
            System.out.println("Not a valid customer id: " + userInput.arguments()[0]);
            return;
        }

        var customer = Customer.CUSTOMERS_BY_ID.get(customerId);
        if (customer == null) {
            System.out.println("Unknown customer id: " + customerId);
            return;
        }

        sessionState.setCustomer(customer);
        System.out.println("Welcome, " + customer.name());
    }
}
