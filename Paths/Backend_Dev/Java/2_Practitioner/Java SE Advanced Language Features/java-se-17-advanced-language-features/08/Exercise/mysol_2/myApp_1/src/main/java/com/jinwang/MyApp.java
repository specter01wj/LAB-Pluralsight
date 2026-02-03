package com.jinwang;

import java.time.LocalDate;
import java.lang.reflect.Field;
import java.lang.reflect.Method;

public class MyApp {
    public static void main(String[] args) {
        System.out.println(">>> Chapter 8 – Exercise 2: Annotated Class Members <<<");

        Customer customer = new Customer();
        customer.setId(1L);
        customer.setName("Annette Daniels");
        customer.setBirthDate(LocalDate.of(1985, 9, 10));

        for (Field field : Customer.class.getDeclaredFields()) {
            if (field.isAnnotationPresent(Loggable.class)) {
                field.setAccessible(true);
                Loggable annotation = field.getAnnotation(Loggable.class);
                try {
                    Object value = field.get(customer);
                    String label = annotation.value().isEmpty() ? field.getName() : annotation.value();
                    LoggableFormatter formatter = annotation.formatter().getDeclaredConstructor().newInstance();
                    System.out.println(label + ": " + formatter.format(value));
                } catch (Exception e) {
                    e.printStackTrace();
                }
            }
        }

        for (Method method : Customer.class.getDeclaredMethods()) {
            if (method.isAnnotationPresent(Loggable.class)) {
                Loggable annotation = method.getAnnotation(Loggable.class);
                try {
                    Object value = method.invoke(customer);
                    String label = annotation.value().isEmpty() ? method.getName() : annotation.value();
                    LoggableFormatter formatter = annotation.formatter().getDeclaredConstructor().newInstance();
                    System.out.println(label + ": " + formatter.format(value));
                } catch (Exception e) {
                    e.printStackTrace();
                }
            }
        }

        System.out.println("\n✅ Exercise 2 complete.\n");
    }
}
