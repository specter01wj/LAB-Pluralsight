package com.jinwang;

public class MyApp {

    public static void main(String[] args) {
        System.out.println(">>> Chapter 7 – Exercise 1: Lambda Expressions and Method References <<<");

        var customers = List.of(
                new Customer("Joe Smith", "joe.smith@example.com"),
                new Customer("Susan Miller", "susan.miller@example.com"),
                new Customer("Will Johnson", "will.johnson@example.com")
        );

        String title = "Special Offer";
        String content = "Hello %s, you get a discount today!";

        Exercise01 exercise = new Exercise01();
        exercise.formatAndSendMail(title, content, customers, email ->
                System.out.printf("To: %s\nSubject: %s\nBody: %s\n\n",
                        email.emailAddress(), email.title(), email.content())
        );

        System.out.println("✅ Exercise 1 complete.\n");
    }

}
