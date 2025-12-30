/*
 * This code is part of the course "Java SE Advanced Language Features" for Pluralsight.
 *
 * Copyright (C) 2024 by Jesper de Jong (jesper@jdj-it.com).
 */
package com.pluralsight.advancedjava.exercises.exercise01;

/**
 * Exercise 1: This is a regular mutable Java class (a POJO, Plain Old Java Object) that represents a customer.
 * <p>
 * TODO: Make this class immutable. Edit the class in whatever way you think is necessary to make it immutable.
 *       Don't make it a record for this exercise - the point here is to learn how to make a regular class immutable.
 *       Run the included unit test {@link Exercise01Test} to check if you have done this correctly.
 */
public class Customer {

    private int id;
    private String name;
    private String email;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
