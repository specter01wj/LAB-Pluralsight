package com.jinwang.commands;

import com.jinwang.Command;
import com.jinwang.SessionState;
import com.jinwang.UserInput;
import com.jinwang.model.OrderLine;

import java.math.BigDecimal;
import java.util.List;

@Command(value = "showcart", order = 40, description = "Show what's in your shopping cart.")
public class ShowShoppingCartCommand implements CommandExecutor {

    @Override
    public void execute(SessionState sessionState, UserInput userInput) {
        List<OrderLine> orderLines = sessionState.getOrderBuilder().getLines();
        if (orderLines.isEmpty()) {
            System.out.println("Your shopping cart is empty.");
        } else {
            int index = 1;
            var totalAmount = BigDecimal.ZERO;
            for (OrderLine orderLine : orderLines) {
                var product = orderLine.product();
                System.out.printf("[%3d] [%6d] %-10s x %3d $ %6s - %s%n",
                        index++, product.id(), product.name(), orderLine.quantity(), orderLine.amount(), product.description());
                totalAmount = totalAmount.add(orderLine.amount());
            }
            System.out.printf("      Total amount:             $ %6s%n", totalAmount);
        }
    }
}
