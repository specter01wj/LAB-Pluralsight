package com.jinwang;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;

public class MyApp {

    public static void main(String[] args) {
        var tx1 = new Purchase(1001L, new BigDecimal("20.00"), LocalDateTime.now());
        var tx2 = new Refund(1001L, new BigDecimal("5.00"), LocalDateTime.now());
        var tx3 = new Purchase(1002L, new BigDecimal("15.00"), LocalDateTime.now());

        List<Transaction> transactions = List.of(tx1, tx2, tx3);

        var service = new TransactionService();
        var result = service.calculateNetAmount(transactions);

        System.out.println("Net amount: " + result);  // Expected: 30.00
    }

}
