/*
 * This code is part of the course "Java SE Advanced Language Features" for Pluralsight.
 *
 * Copyright (C) 2024 by Jesper de Jong (jesper@jdj-it.com).
 */
package com.pluralsight.advancedjava.examples.example08;

/**
 * Example: Using records for domain-specific value types.
 */
public class RecordsExample08 {

    public static void main(String[] args) {
        // Because fullName, nickName and email are all strings, it's easy to make a mistake when creating a new instance of this record by passing
        // the arguments in the wrong order. The compiler cannot help you catch this mistake.
        var customer1 = new Customer1(500567L, "joes", "Joe", "Smith", "joe.smith@example.com");
        System.out.println(customer1);

        // By using specific types for the name, nickname and email address, it makes it really clear which is which, and it's hard to make a mistake
        // by passing arguments in the wrong order.
        var customer2 = new Customer2(500567L, new FullName("Joe", "Smith"), new NickName("joes"), new EmailAddress("joe.smith@example.com"));
        System.out.println(customer2);
    }
}
