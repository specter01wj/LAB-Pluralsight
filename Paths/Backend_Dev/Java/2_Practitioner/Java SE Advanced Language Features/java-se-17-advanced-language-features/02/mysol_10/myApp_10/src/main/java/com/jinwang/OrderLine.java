package com.jinwang;

import java.math.BigDecimal;

import static com.jinwang.Validation.checkThat;

public record OrderLine(Product product, int quantity, BigDecimal price) {

    public OrderLine {
        checkThat(product != null, "product must not be null");
        checkThat(price != null, "price must not be null");
    }

    /**
     * Returns a copy of this OrderLine with a different quantity.
     * If the quantity is unchanged, returns this instance.
     */
    public OrderLine withQuantity(int newQuantity) {
        return newQuantity == this.quantity
                ? this
                : new OrderLine(this.product, newQuantity, this.price);
    }

    /**
     * Returns a copy of this OrderLine with a different price.
     */
    public OrderLine withPrice(BigDecimal newPrice) {
        return new OrderLine(this.product, this.quantity, newPrice);
    }
}
