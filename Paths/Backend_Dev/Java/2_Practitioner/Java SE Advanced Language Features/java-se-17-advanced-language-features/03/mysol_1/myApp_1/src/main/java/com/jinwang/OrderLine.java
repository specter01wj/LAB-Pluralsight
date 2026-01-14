package com.jinwang;

public sealed interface OrderLine permits SaleOrderLine, DiscountOrderLine {
}
