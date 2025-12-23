package com.jinwang;

import com.common.Product;
import com.common.Supplier;

import java.util.*;

public class WeightAwareProductCatalogue implements Iterable<Product> {

    private final NavigableSet<Product> products =
            new TreeSet<>(Product.BY_WEIGHT);

    public void addSupplier(final Supplier supplier) {
        Objects.requireNonNull(supplier, "Supplier must not be null");
        products.addAll(supplier.getProducts());
    }

    public Set<Product> findLighterProducts(final Product referenceProduct) {
        Objects.requireNonNull(referenceProduct, "Reference product must not be null");
        return Collections.unmodifiableSet(products.headSet(referenceProduct));
    }

    public Set<Product> getAllProducts() {
        return Collections.unmodifiableSet(products);
    }

    @Override
    public Iterator<Product> iterator() {
        return getAllProducts().iterator();
    }

}
