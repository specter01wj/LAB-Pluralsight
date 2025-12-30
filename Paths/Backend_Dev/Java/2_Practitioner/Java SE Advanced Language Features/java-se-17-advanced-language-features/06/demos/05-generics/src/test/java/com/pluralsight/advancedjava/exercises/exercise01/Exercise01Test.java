/*
 * This code is part of the course "Java SE Advanced Language Features" for Pluralsight.
 *
 * Copyright (C) 2024 by Jesper de Jong (jesper@jdj-it.com).
 */
package com.pluralsight.advancedjava.exercises.exercise01;

import com.pluralsight.advancedjava.exercises.utils.ElementUtils;
import org.junit.jupiter.api.*;

import javax.lang.model.type.TypeVariable;

import static com.pluralsight.advancedjava.exercises.assertions.ExecutableElementAssert.assertThat;
import static com.pluralsight.advancedjava.exercises.assertions.VariableElementAssert.assertThat;
import static com.pluralsight.advancedjava.exercises.utils.CompilerUtils.compileAndGetTypeElements;
import static org.assertj.core.api.Assertions.assertThat;

@DisplayName("Exercise 1")
@Order(1)
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
class Exercise01Test {

    @Test
    @DisplayName("Class LabeledValue is implemented correctly")
    @Order(1)
    void classLabeledValueIsImplementedCorrectly() {
        var typeElements = compileAndGetTypeElements("src/main/java/com/pluralsight/advancedjava/exercises/exercise01/LabeledValue.java");
        var labeledValueElement = ElementUtils.getType(typeElements, "com.pluralsight.advancedjava.exercises.exercise01.LabeledValue");

        // LabeledValue must have one type parameter
        var typeParameters = labeledValueElement.getTypeParameters();
        assertThat(typeParameters).as("Class LabeledValue must have exactly one type parameter").hasSize(1);
        var typeVariable = (TypeVariable) labeledValueElement.getTypeParameters().get(0).asType();

        // The type of the field 'value' must be the type variable
        assertThat(ElementUtils.getField(labeledValueElement, "value").asType())
                .as("The 'value' field has the wrong type")
                .isEqualTo(typeVariable);

        // LabeledValue must have one constructor
        var constructors = ElementUtils.getConstructors(labeledValueElement);
        assertThat(constructors).as("Class LabeledValue must have exactly one constructor").hasSize(1);
        var constructor = constructors.get(0);

        var constructorParams = constructor.getParameters();
        assertThat(constructorParams).as("The constructor must have two parameters").hasSize(2);

        // The first parameter of the constructor must be of type String
        assertThat(constructorParams.get(0))
                .as("The first parameter of the constructor has the wrong type")
                .isOfType("java.lang.String");

        // The second parameter of the constructor must be of type T
        assertThat(constructorParams.get(1))
                .as("The second parameter of the constructor has the wrong type")
                .isOfType(typeVariable);

        // The return type of the 'getValue' method must be the type variable T
        assertThat(ElementUtils.getMethod(labeledValueElement, "getValue"))
                .as("The 'getValue' method has the wrong return type")
                .hasReturnType(typeVariable);
    }
}
