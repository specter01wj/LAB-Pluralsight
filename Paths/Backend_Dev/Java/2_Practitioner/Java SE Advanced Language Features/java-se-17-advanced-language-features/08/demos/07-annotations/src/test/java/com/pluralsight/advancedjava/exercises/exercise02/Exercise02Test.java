/*
 * This code is part of the course "Java SE Advanced Language Features" for Pluralsight.
 *
 * Copyright (C) 2024 by Jesper de Jong (jesper@jdj-it.com).
 */
package com.pluralsight.advancedjava.exercises.exercise02;

import com.pluralsight.advancedjava.exercises.exercise01.LocalDateLoggableFormatter;
import com.pluralsight.advancedjava.exercises.exercise01.Loggable;
import com.pluralsight.advancedjava.exercises.exercise01.ToStringLoggableFormatter;
import org.junit.jupiter.api.*;

import java.lang.annotation.Annotation;
import java.lang.reflect.Field;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;

import static org.assertj.core.api.Assertions.assertThat;

@DisplayName("Exercise 2")
@Order(2)
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
class Exercise02Test {

    @Test
    @DisplayName("The field 'id' of class Customer has the Loggable annotation")
    @Order(1)
    void fieldIdHasLoggableAnnotation() {
        @SuppressWarnings("unchecked") // Note: Ugly construction necessary to make it compile if Loggable is not (yet) an annotation
        Class<? extends Annotation> cls = (Class<? extends Annotation>) (Class<?>) Loggable.class;
        var annotation = getField(Customer.class, "id").getAnnotation(cls);
        assertThat(annotation)
                .as("The field 'id' does not have the Loggable annotation")
                .isNotNull();

        var valueMethod = getMethod(Loggable.class, "value");
        assertThat(invokeMethod(valueMethod, annotation))
                .as("The value of the 'value' element of the Loggable annotation on the field 'id' should be the default value (empty string)")
                .isEqualTo("");

        var formatterMethod = getMethod(Loggable.class, "formatter");
        assertThat(invokeMethod(formatterMethod, annotation))
                .as("The value of the 'formatter' element of the Loggable annotation on the field 'id' should be the default value")
                .isEqualTo(ToStringLoggableFormatter.class);
    }

    @Test
    @DisplayName("The method 'getName' of class Customer has the Loggable annotation")
    @Order(2)
    void methodGetNameHasLoggableAnnotation() {
        @SuppressWarnings("unchecked") // Note: Ugly construction necessary to make it compile if Loggable is not (yet) an annotation
        Class<? extends Annotation> cls = (Class<? extends Annotation>) (Class<?>) Loggable.class;
        var annotation = getMethod(Customer.class, "getName").getAnnotation(cls);
        assertThat(annotation)
                .as("The method 'getName' does not have the Loggable annotation")
                .isNotNull();

        var valueMethod = getMethod(Loggable.class, "value");
        assertThat(invokeMethod(valueMethod, annotation))
                .as("The value of the 'value' element of the Loggable annotation on the method 'getName' is incorrect")
                .isEqualTo("name");

        var formatterMethod = getMethod(Loggable.class, "formatter");
        assertThat(invokeMethod(formatterMethod, annotation))
                .as("The value of the 'formatter' element of the Loggable annotation on the method 'getName' should be the default value")
                .isEqualTo(ToStringLoggableFormatter.class);
    }

    @Test
    @DisplayName("The method 'getBirthDate' of class Customer has the Loggable annotation")
    @Order(3)
    void methodGetBirthDateHasLoggableAnnotation() {
        @SuppressWarnings("unchecked") // Note: Ugly construction necessary to make it compile if Loggable is not (yet) an annotation
        Class<? extends Annotation> cls = (Class<? extends Annotation>) (Class<?>) Loggable.class;
        var annotation = getMethod(Customer.class, "getBirthDate").getAnnotation(cls);
        assertThat(annotation)
                .as("The method 'getBirthDate' does not have the Loggable annotation")
                .isNotNull();

        var valueMethod = getMethod(Loggable.class, "value");
        assertThat(invokeMethod(valueMethod, annotation))
                .as("The value of the 'value' element of the Loggable annotation on the method 'getBirthDate' is incorrect")
                .isEqualTo("birthDate");

        var formatterMethod = getMethod(Loggable.class, "formatter");
        assertThat(invokeMethod(formatterMethod, annotation))
                .as("The value of the 'formatter' element of the Loggable annotation on the method 'getBirthDate' should be the default value")
                .isEqualTo(LocalDateLoggableFormatter.class);
    }

    private Field getField(Class<?> cls, String name) {
        try {
            return cls.getDeclaredField(name);
        } catch (NoSuchFieldException e) {
            throw new AssertionError("Failed to get field: " + name);
        }

    }

    private Method getMethod(Class<?> cls, String name) {
        try {
            return cls.getDeclaredMethod(name);
        } catch (NoSuchMethodException e) {
            throw new AssertionError("Failed to get method: " + name);
        }
    }

    private Object invokeMethod(Method method, Object object) {
        try {
            return method.invoke(object);
        } catch (IllegalAccessException | InvocationTargetException e) {
            throw new AssertionError("Failed to invoke method: " + method.getName());
        }
    }
}
