package com.jinwang;

import java.util.Objects;

public final class ProductCls {

    private final long id;
    private final String name;
    private final String description;

    public ProductCls(long id, String name, String description) {
        this.id = id;
        this.name = name;
        this.description = description;
    }

    public long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getDescription() {
        return description;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof ProductCls)) return false;
        ProductCls that = (ProductCls) o;
        return id == that.id &&
                Objects.equals(name, that.name) &&
                Objects.equals(description, that.description);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, description);
    }

    @Override
    public String toString() {
        return String.format("ProductCls{id=%d, name='%s', description='%s'}", id, name, description);
    }
}
