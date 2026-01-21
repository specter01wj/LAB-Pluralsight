package com.jinwang;


import com.pluralsight.advancedjava.examples.model.Order;
import com.pluralsight.advancedjava.examples.model.OrderLine;
import com.pluralsight.advancedjava.examples.model.SaleOrderLine;

public class OrderService {

    public boolean containsSaleOfProduct(Order order, int productId) {
        for (OrderLine line : order.lines()) {
            if (line instanceof SaleOrderLine sale
                    && sale.product().id() == productId) {
                return true;
            }
        }
        return false;
    }
}
