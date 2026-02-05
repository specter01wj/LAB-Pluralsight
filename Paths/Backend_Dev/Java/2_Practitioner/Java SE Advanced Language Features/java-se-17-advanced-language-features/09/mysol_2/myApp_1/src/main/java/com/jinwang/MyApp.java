package com.jinwang;

import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

public class MyApp {

    public static void main(String[] args) {
        System.out.println(">>> Chapter 9 – Example 2: Optional and Streams <<<");

        Optional<Product> optional = findProductById(269912L);

        // ifPresent
        optional.ifPresent(product -> System.out.println("Found product: " + product));

        // ifPresentOrElse
        optional.ifPresentOrElse(
                product -> System.out.println("Found product: " + product),
                () -> System.out.println("Product not found")
        );

        // map + orElse
        String text = optional.map(Product::name).orElse("Product not found");
        System.out.println(text);

        // filter + map
        Set<Long> discountedProductIds = Set.of(923569L, 404019L, 269912L, 837481L, 947848L, 289838L, 377290L);
        String discountMessage = optional
                .filter(product -> discountedProductIds.contains(product.id()))
                .map(product -> "Discounted product: " + product.name())
                .orElse("No discounted product");
        System.out.println(discountMessage);

        // Stream<Optional<Product>> → Stream<Product> using flatMap(Optional::stream)
        Set<Long> productIds = Set.of(485845L, 236839L, 100178L, 592496L, 476371L, 373279L, 295695L, 199192L);
        List<Product> products = productIds.stream()
                .map(MyApp::findProductById)
                .flatMap(Optional::stream)
                .collect(Collectors.toList());

        products.forEach(System.out::println);

        System.out.println("✅ Example 2 complete.\n");
    }

    private static Optional<Product> findProductById(long productId) {
        return Product.PRODUCTS.stream()
                .filter(product -> product.id() == productId)
                .findFirst();
    }
}
