package com.model;

// Sealed interface for order lines, permits Sale and Discount types.
public sealed interface OrderLine permits SaleOrderLine, DiscountOrderLine {
}
