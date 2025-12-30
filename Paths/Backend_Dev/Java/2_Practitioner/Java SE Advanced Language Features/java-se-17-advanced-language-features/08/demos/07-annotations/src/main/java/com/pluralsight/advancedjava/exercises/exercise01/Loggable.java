/*
 * This code is part of the course "Java SE Advanced Language Features" for Pluralsight.
 *
 * Copyright (C) 2024 by Jesper de Jong (jesper@jdj-it.com).
 */
package com.pluralsight.advancedjava.exercises.exercise01;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

/**
 * Exercise 1: Define an annotation.
 * <p>
 * TODO: Modify the code below to define an annotation. (Note: Currently it is a regular interface, to prevent the example code from producing compile errors).
 * <p>
 * TODO: Add appropriate meta-annotations to configure the following aspects:
 *       - The annotation should be usable on fields as well as methods.
 *       - Information about the annotation should be available at runtime.
 * <p>
 * TODO: Add elements to this annotation according to the following specifications:
 *       - An element named 'value' of type String, with an empty string as the default value.
 *       - An element named 'formatter' of type Class<? extends LoggableFormatter>, with ToStringLoggableFormatter as the default formatter.
 * <p>
 * Run the included unit test {@link Exercise01Test} to check if you have done this correctly.
 */
public interface Loggable {
}
