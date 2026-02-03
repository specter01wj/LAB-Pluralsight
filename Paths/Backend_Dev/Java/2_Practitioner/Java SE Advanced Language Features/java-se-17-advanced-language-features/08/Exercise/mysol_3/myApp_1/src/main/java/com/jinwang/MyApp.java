package com.jinwang;

import java.time.LocalDate;

public class MyApp {

    public static void main(String[] args) throws Exception {
        System.out.println(">>> Chapter 8 – Exercise 3: Reflection and Annotations <<<");

        var customer = new Customer();
        customer.setId(1L);
        customer.setName("Jin Wang");
        customer.setBirthDate(LocalDate.of(1990, 2, 28));

        System.out.println(AnnotationsExercise03.formatMethodValue(customer, "getName"));
        System.out.println(AnnotationsExercise03.formatMethodValue(customer, "getBirthDate"));

        System.out.println("\n✅ Exercise 3 complete.\n");
    }
}
