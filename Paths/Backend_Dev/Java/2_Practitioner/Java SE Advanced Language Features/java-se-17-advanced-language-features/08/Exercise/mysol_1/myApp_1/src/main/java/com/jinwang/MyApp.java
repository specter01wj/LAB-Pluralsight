package com.jinwang;

import java.lang.reflect.Field;
import java.time.LocalDate;

public class MyApp {

    public static void main(String[] args) throws Exception {
        System.out.println(">>> Chapter 8 – Exercise 1: Custom Annotation <<<");

        var customerName = "Joe Smith";
        var birthDate = LocalDate.of(1988, 3, 15);

        // Anonymous class with @Loggable fields
        var obj = new Object() {
            @Loggable("Customer Name")
            String name = customerName;

            @Loggable(value = "Birthdate", formatter = LocalDateLoggableFormatter.class)
            LocalDate dob = birthDate;
        };

        for (Field field : obj.getClass().getDeclaredFields()) {
            if (field.isAnnotationPresent(Loggable.class)) {
                field.setAccessible(true);

                Loggable loggable = field.getAnnotation(Loggable.class);
                LoggableFormatter formatter = loggable.formatter()
                        .getDeclaredConstructor().newInstance();

                Object value = field.get(obj);
                System.out.printf("%s: %s\n", loggable.value(), formatter.format(value));
            }
        }

        System.out.println("\n✅ Exercise 1 complete.\n");
    }
}
