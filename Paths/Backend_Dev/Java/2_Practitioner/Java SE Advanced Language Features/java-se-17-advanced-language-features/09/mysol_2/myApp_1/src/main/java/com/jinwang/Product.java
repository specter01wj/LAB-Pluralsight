package com.jinwang;

import java.math.BigDecimal;
import java.util.Arrays;
import java.util.List;

public record Product(long id, String name, BigDecimal price) {

    public static final List<Product> PRODUCTS = Arrays.asList(
            new Product(100463L, "Oranges", new BigDecimal("1.65")),
            new Product(267281L, "Gouda cheese", new BigDecimal("6.79")),
            new Product(934799L, "Plates", new BigDecimal("12.95")),
            new Product(246238L, "Detergent", new BigDecimal("3.79")),
            new Product(367570L, "Soft drink", new BigDecimal("1.99")),
            new Product(592356L, "Pencils", new BigDecimal("5.79")),
            new Product(295695L, "Rice", new BigDecimal("2.99")),
            new Product(592496L, "Scourer", new BigDecimal("2.29")),
            new Product(527502L, "Milk", new BigDecimal("1.39")),
            new Product(100178L, "Notebook", new BigDecimal("4.99")),
            new Product(172982L, "Tea", new BigDecimal("4.29")),
            new Product(269912L, "Tomato sauce", new BigDecimal("1.39")),
            new Product(883763L, "Peanut butter", new BigDecimal("2.39")),
            new Product(923569L, "Red bell pepper", new BigDecimal("0.99")),
            new Product(485845L, "Spoons", new BigDecimal("14.95")),
            new Product(476371L, "Adhesive tape", new BigDecimal("5.39")),
            new Product(113871L, "Dish brush", new BigDecimal("3.49")),
            new Product(339337L, "Knives", new BigDecimal("9.95")),
            new Product(239834L, "Brown bread", new BigDecimal("3.99")),
            new Product(404019L, "Potatoes", new BigDecimal("1.59")),
            new Product(562001L, "Dishcloth", new BigDecimal("2.59")),
            new Product(377290L, "Apples", new BigDecimal("1.29")),
            new Product(397811L, "Ballpoint pens", new BigDecimal("6.79")),
            new Product(837481L, "Spaghetti", new BigDecimal("2.79")),
            new Product(967733L, "Forks", new BigDecimal("14.95")),
            new Product(482783L, "Paper towel", new BigDecimal("3.69")),
            new Product(947848L, "Coffee", new BigDecimal("7.49")),
            new Product(226762L, "Highlighter", new BigDecimal("2.29")),
            new Product(792002L, "Orange juice", new BigDecimal("3.49")),
            new Product(289838L, "Spring water", new BigDecimal("0.99"))
    );
}
