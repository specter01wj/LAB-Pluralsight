package com.jinwang;

import java.util.List;
import java.util.function.Consumer;

public class MyApp {

    public static void main(String[] args) {
        System.out.println(">>> Chapter 7 – Exercise 2: Standard Functional Interfaces <<<");

        var customers = List.of(
                new Customer(1L, "Joe Smith", "joe.smith@example.com"),
                new Customer(2L, "Susan Miller", "susan.miller@example.com"),
                new Customer(3L, "Will Johnson", "will.johnson@example.com")
        );

        String title = "Exclusive Deal";
        String content = "Hi %s, don't miss out on this limited-time offer!";

        Exercise02 exercise2 = new Exercise02();
        
        exercise2.formatAndSendMail(title, content, customers, (Consumer<Email>) email ->
                System.out.printf("To: %s\nSubject: %s\nBody: %s\n\n",
                        email.recipient(), email.title(), email.content())
        );

        System.out.println("✅ Exercise 2 complete.\n");
    }

}
