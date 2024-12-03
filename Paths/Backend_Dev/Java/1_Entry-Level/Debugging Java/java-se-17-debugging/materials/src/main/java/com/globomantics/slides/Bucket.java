package com.globomantics.slides;

import java.util.Objects;

public class Bucket {
  private int size;
  private String color;

  public Bucket(int size, String color) {
    this.size = size;
    this.color = color;
  }

  @Override
  public boolean equals(Object o) {
    if (this == o) return true;
    if (o == null || getClass() != o.getClass()) return false;
    Bucket bucket = (Bucket) o;
    return size == bucket.size && Objects.equals(color, bucket.color);
  }

  public int getSize() {
    return size;
  }

  public void setSize(int size) {
    this.size = size;
  }

  public String getColor() {
    return color;
  }

  public void setColor(String color) {
    this.color = color;
  }

  @Override
  public int hashCode() {
    return Objects.hash(size, color);
  }
}
