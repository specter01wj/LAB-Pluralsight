package com.jinwang;

import com.model.Order;
import com.model.OrderLine;
import com.model.SaleOrderLine;

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
