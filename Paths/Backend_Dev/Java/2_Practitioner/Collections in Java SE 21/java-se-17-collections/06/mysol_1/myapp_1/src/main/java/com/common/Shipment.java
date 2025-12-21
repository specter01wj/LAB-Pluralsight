package com.common;

import java.util.*;

public class Shipment implements Iterable<Product> {
    private static final int LIGHT_VAN_MAX_WEIGHT = 20;
    private static final int MISSING_PRODUCT = -1;

    private final List<Product> products = new ArrayList<>();
    private List<Product> lightVanProducts = List.of();  // Safe default
    private List<Product> heavyVanProducts = List.of();  // Safe default

    public void add(Product product) {
        products.add(product);
    }

    public boolean replace(Product oldProduct, Product newProduct) {
        int index = products.indexOf(oldProduct);
        if (index == MISSING_PRODUCT) {
            return false;
        }
        products.set(index, newProduct);
        return true;
    }

    public void prepare() {
        products.sort(Product.BY_WEIGHT);

        int splitPoint = findSplitPoint();

        lightVanProducts = Collections.unmodifiableList(products.subList(0, splitPoint));
        heavyVanProducts = Collections.unmodifiableList(products.subList(splitPoint, products.size()));
    }

    private int findSplitPoint() {
        for (int i = 0; i < products.size(); i++) {
            if (products.get(i).weight() > LIGHT_VAN_MAX_WEIGHT) {
                return i;
            }
        }
        return products.size();
    }

    public List<Product> getLightVanProducts() {
        return lightVanProducts;
    }

    public List<Product> getHeavyVanProducts() {
        return heavyVanProducts;
    }

    @Override
    public Iterator<Product> iterator() {
        return products.iterator();
    }
}
