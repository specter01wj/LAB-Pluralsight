/*
 * This code is part of the course "Java SE Advanced Language Features" for Pluralsight.
 *
 * Copyright (C) 2024 by Jesper de Jong (jesper@jdj-it.com).
 */
package com.pluralsight.advancedjava.exercises.exercise03;

import com.pluralsight.advancedjava.exercises.exercise01.Loggable;
import com.pluralsight.advancedjava.exercises.exercise01.LoggableFormatter;

import java.lang.reflect.Field;
import java.lang.reflect.Method;

/**
 * Exercise 3: Working with annotations via reflection.
 * <p>
 * Run the included unit test {@link Exercise03Test} to check if you have done this correctly.
 */
public class AnnotationsExercise03 {

    public static String formatMethodValue(Object object, String methodName) throws Exception {
        Method method = object.getClass().getDeclaredMethod(methodName);
        method.setAccessible(true);
        Object methodValue = method.invoke(object);

        // TODO: Complete the code below to get the annotation and get the values of the elements of the annotation,
        //       so that the method value can be formatted appropriately.

        // TODO: Replace 'null' by a call to get the Loggable annotation on the method.
        Loggable annotation = null;

        if (annotation != null) {
            // TODO: Replace the string "TODO" by a call to get the value of the 'value' element of the annotation.
            String label = "TODO";

            // TODO: Replace 'null' by a call to get the value of the 'formatter' element of the annotation.
            Class<? extends LoggableFormatter> formatterClass = null;

            LoggableFormatter formatter = formatterClass.getDeclaredConstructor().newInstance();
            return String.format("%s=[%s]", label, formatter.format(methodValue));
        } else {
            return null;
        }
    }
}
