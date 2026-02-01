package com.jinwang;

import java.util.List;

public class MyApp {

    public static void main(String[] args) {
        System.out.println(">>> Chapter 7 – Exercise 1: Lambda Expressions and Method References <<<");

        var customers = List.of(
                new Customer(1L, "Joe Smith", "joe.smith@example.com"),
                new Customer(2L, "Susan Miller", "susan.miller@example.com"),
                new Customer(3L, "Will Johnson", "will.johnson@example.com")
        );

        String title = "Special Offer";
        String content = "Hello %s, you get a discount today!";

        Exercise01 exercise = new Exercise01();
        exercise.formatAndSendMail(
                title,
                content,
                customers,
                email -> System.out.printf(
                        "To: %s%nSubject: %s%nBody: %s%n%n",
                        email.recipient(),
                        email.title(),
                        email.content()
                )
        );

        System.out.println("✅ Exercise 1 complete.");
    }

}
