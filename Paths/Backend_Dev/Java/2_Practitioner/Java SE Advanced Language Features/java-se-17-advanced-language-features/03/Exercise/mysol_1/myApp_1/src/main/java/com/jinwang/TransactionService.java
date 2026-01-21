package com.jinwang;

import java.math.BigDecimal;
import java.util.List;

public class TransactionService {

    public BigDecimal calculateNetAmount(List<Transaction> transactions) {
        var netAmount = BigDecimal.ZERO;

        for (Transaction transaction : transactions) {
            var amount = switch (transaction) {
                case Purchase p -> p.amount();
                case Refund r -> r.amount().negate();
            };

            netAmount = netAmount.add(amount);
        }

        return netAmount;
    }

}
