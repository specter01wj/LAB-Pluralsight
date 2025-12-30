/*
 * This code is part of the course "Java SE Advanced Language Features" for Pluralsight.
 *
 * Copyright (C) 2024 by Jesper de Jong (jesper@jdj-it.com).
 */
package com.pluralsight.advancedjava.exercises.exercise02;

import com.pluralsight.advancedjava.exercises.utils.ElementUtils;
import org.junit.jupiter.api.*;

import javax.lang.model.element.Modifier;
import javax.lang.model.type.DeclaredType;
import javax.lang.model.type.TypeMirror;
import javax.lang.model.type.TypeVariable;

import static com.pluralsight.advancedjava.exercises.assertions.ExecutableElementAssert.assertThat;
import static com.pluralsight.advancedjava.exercises.assertions.VariableElementAssert.assertThat;
import static com.pluralsight.advancedjava.exercises.utils.CompilerUtils.compileAndGetTypeElements;
import static com.pluralsight.advancedjava.exercises.utils.CompilerUtils.compileAndRunTest;
import static org.assertj.core.api.Assertions.assertThat;

@DisplayName("Exercise 2")
@Order(2)
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
class Exercise02Test {

    @Test
    @DisplayName("The mapValue method has the expected signature")
    @Order(1)
    void theMapValueMethodHasTheExpectedSignature() {
        var typeElements = compileAndGetTypeElements("src/main/java/com/pluralsight/advancedjava/exercises/exercise02/KeyValue.java");
        var keyValueElement = ElementUtils.getType(typeElements, "com.pluralsight.advancedjava.exercises.exercise02.KeyValue");

        // KeyValue must have two type parameters
        var typeParameters = keyValueElement.getTypeParameters();
        assertThat(typeParameters).as("Record KeyValue must have exactly two type parameters").hasSize(2);
        var keyTypeVariable = (TypeVariable) typeParameters.get(0).asType();
        var valueTypeVariable = (TypeVariable) typeParameters.get(1).asType();

        // Get the 'mapValue' method
        var mapValueMethod = ElementUtils.getMethod(keyValueElement, "mapValue");

        // The 'mapValue' method must be an instance method (not a static method)
        assertThat(mapValueMethod.getModifiers())
                .as("The 'mapValue' method must be an instance method")
                .doesNotContain(Modifier.STATIC);

        // The 'mapValue' method must have one type parameter
        var mapValueTypeParams = mapValueMethod.getTypeParameters();
        assertThat(mapValueTypeParams).as("The 'mapValue' method must have exactly one type parameter").hasSize(1);
        var mapValueTypeVariable = (TypeVariable) mapValueTypeParams.get(0).asType();

        // The return type of the 'mapValue' method must be KeyValue
        assertThat(mapValueMethod)
                .as("The 'mapValue' method has the wrong return type")
                .hasReturnType("com.pluralsight.advancedjava.exercises.exercise02.KeyValue");

        // The type arguments of the return type of the 'mapValue' method must be <K, T>
        var mapValueReturnType = (DeclaredType) mapValueMethod.getReturnType();
        var mapValueReturnTypeArgs = mapValueReturnType.getTypeArguments();
        assertThat(mapValueReturnTypeArgs)
                .as("The return type of the 'mapValue' must not be a raw type; it must have type arguments")
                .isNotEmpty();
        assertThat(mapValueReturnTypeArgs).map(TypeMirror.class::cast)
                .as("The 'mapValue' method has the wrong return type; expected: KeyValue<%s, %s>", keyTypeVariable, mapValueTypeVariable)
                .containsExactly(keyTypeVariable, mapValueTypeVariable);

        // The 'mapValue' method must have one parameter, which is of type Function
        var mapValueParams = mapValueMethod.getParameters();
        assertThat(mapValueParams).as("The 'mapValue' method must have exactly one parameter").hasSize(1);
        var mapValueParam = mapValueParams.get(0);

        // The type of the parameter of the 'mapValue' method must be Function
        assertThat(mapValueParam)
                .as("The parameter of the 'mapValue' method has the wrong type")
                .isOfType("java.util.function.Function");

        // The type arguments of the parameter type of the 'mapValue' method must be <V, T>
        var mapValueParamType = (DeclaredType) mapValueParam.asType();
        var mapValueParamTypeArgs = mapValueParamType.getTypeArguments();
        assertThat(mapValueParamTypeArgs)
                .as("The type of the parameter of the 'mapValue' method must not be a raw type; it must have type arguments")
                .isNotEmpty();
        assertThat(mapValueParamTypeArgs).map(TypeMirror.class::cast)
                .as("The parameter of the 'mapValue' method has the wrong type; expected: Function<%s, %s>", valueTypeVariable, mapValueTypeVariable)
                .containsExactly(valueTypeVariable, mapValueTypeVariable);
    }

    @Test
    @DisplayName("The mapValue method is implemented correctly")
    @Order(2)
    void theMapValueMethodIsImplementedCorrectly() {
        compileAndRunTest("com.pluralsight.advancedjava.exercises.exercise02.KeyValueTest",
                "src/main/java/com/pluralsight/advancedjava/exercises/exercise02/KeyValue.java",
                "src/test/resources/com/pluralsight/advancedjava/exercises/exercise02/KeyValueTest.java");
    }
}
