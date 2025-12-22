package com.jinwang;

import com.common.Product;
import com.common.Supplier;

import java.util.*;

public class ProductCatalogue implements Iterable<Product> {

    private final Set<Product> products = new HashSet<>();

    /**
     * Adds all products from the given supplier to the catalogue.
     * Duplicates are ignored automatically by the Set.
     *
     * @param supplier the supplier whose products are to be added
     */
    public void addSupplier(final Supplier supplier) {
        Objects.requireNonNull(supplier, "Supplier must not be null");
        products.addAll(supplier.getProducts());
    }

    /**
     * Returns an unmodifiable view of the products in the catalogue.
     */
    public Set<Product> getProducts() {
        return Collections.unmodifiableSet(products);
    }

    @Override
    public Iterator<Product> iterator() {
        return products.iterator();
    }
}
