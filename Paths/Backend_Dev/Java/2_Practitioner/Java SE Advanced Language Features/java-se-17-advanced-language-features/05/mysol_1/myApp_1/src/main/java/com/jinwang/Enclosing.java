package com.jinwang;

import java.time.LocalDate;

public class Enclosing {

    private static int number = 23;
    private static LocalDate date = LocalDate.of(2023, 1, 1);
    private String name = "Joe Smith";

    private static void printNumber() {
        System.out.println("Enclosing.printNumber(): " + number);
    }

    private static void printDate() {
        System.out.println("Enclosing.printDate(): " + date);
    }

    public void printName() {
        System.out.println("Enclosing.printName(): " + name);
    }

    public void createAndRunNested() {
        var nested = new Nested();
        nested.run(); // Can access private method of static nested class
    }

    // ✅ Static nested class
    public static class Nested {

        private LocalDate date = LocalDate.of(2011, 8, 9);

        private void run() {
            // Access static fields and methods from enclosing class
            System.out.println("Nested accessing number: " + number);
            printNumber();

            // Shadowed field
            System.out.println("Nested.date: " + date);               // Own date
            System.out.println("Enclosing.date: " + Enclosing.date); // Enclosing class date

            // Shadowed method
            printDate();             // Nested.printDate()
            Enclosing.printDate();  // Enclosing.printDate()
        }

        private void printDate() {
            System.out.println("Nested.printDate(): " + date);
        }
    }
}
