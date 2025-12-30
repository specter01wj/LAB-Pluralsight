/*
 * This code is part of the course "Java SE Advanced Language Features" for Pluralsight.
 *
 * Copyright (C) 2024 by Jesper de Jong (jesper@jdj-it.com).
 */
package com.pluralsight.advancedjava.exercises.exercise01;

import com.pluralsight.advancedjava.exercises.Customer;
import com.pluralsight.advancedjava.exercises.Email;

import java.util.List;

/**
 * Exercise 1: Lambda expressions and method references.
 * <p>
 * TODO: A personalized email needs to be sent to each of the customers in the list.
 *       Uncomment the lines in the method formatAndSendMail() below and use lambda expressions and method references to implement it.
 *       For each customer, create an Email object that contains the customer's email address and the given title and content,
 *       but note that the content needs to be personalized. The string 'content' is actually a format string, so it contains
 *       something like: "Hello %s, you get a discount today!". Use String.format() to replace the %s by the customer's name.
 *       After mapping each customer to an Email object with a personalized message, call emailSender.send() to send each email.
 *       Run the included unit test {@link Exercise01Test} to check if you have done this correctly.
 */
public class Exercise01 {

    @FunctionalInterface
    public interface EmailSender {
        void send(Email email);
    }

    public void formatAndSendMail(String title, String content, List<Customer> customers, EmailSender emailSender) {
//        customers.stream()
//                .map(...)         // TODO: Map each Customer to an Email with a personalized message. Hint: Use a lambda expression.
//                .forEach(...);    // TODO: Send email by calling emailSender.send(). Hint: Use a method reference.
    }
}
