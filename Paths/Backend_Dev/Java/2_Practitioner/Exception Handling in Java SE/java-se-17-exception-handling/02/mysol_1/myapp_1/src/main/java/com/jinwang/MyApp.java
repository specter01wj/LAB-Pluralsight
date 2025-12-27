package com.jinwang;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class MyApp {

    public static void main(String[] args) {
        // Working with try/catch
        /*int i = 12, j = 2;
        try {
            int result = i / (j - 2);
            System.out.println(result);
        } catch (Exception ex) {
            System.out.println("Error: " + ex.getMessage());
            ex.printStackTrace();
        }
        System.out.println("Continue work!");
        */

        if (args.length == 0) {
            System.err.println("Please provide the input file as the first argument.");
            return;
        }

        String fileName = args[0];

        try (BufferedReader reader = new BufferedReader(new FileReader(fileName))) {
            String inputLine;
            while ((inputLine = reader.readLine()) != null) {
                try {
                    performOperation(inputLine);
                    
                } catch (Exception e) {
                    System.err.println("Failed to process line: \"" + inputLine + "\" → " + e.getMessage());
                }
            }
        } catch (IOException e) {
            System.err.println("Failed to read file: " + fileName);
            System.err.println("Error: " + e.getMessage());
        }
    }

    private static void performOperation(String inputLine) {
        String[] parts = inputLine.trim().split("\\s+");
        if (parts.length != 3) {
            throw new IllegalArgumentException("Invalid input format. Expected format: OPERATION LEFT RIGHT");
        }

        MathOperation operation = MathOperation.valueOf(parts[0].toUpperCase());
        int leftVal = parseValue(parts[1]);
        int rightVal = parseValue(parts[2]);

        int result = execute(operation, leftVal, rightVal);

        System.out.println(inputLine + " = " + result);
    }

    private static int execute(MathOperation operation, int leftVal, int rightVal) {
        return switch (operation) {
            case ADD      -> leftVal + rightVal;
            case SUBTRACT -> leftVal - rightVal;
            case MULTIPLY -> leftVal * rightVal;
            case DIVIDE   -> {
                if (rightVal == 0) throw new ArithmeticException("Division by zero");
                yield leftVal / rightVal;
            }
        };
    }

    private static int parseValue(String word) {
        String[] numberWords = {
                "zero", "one", "two", "three", "four",
                "five", "six", "seven", "eight", "nine"
        };

        for (int i = 0; i < numberWords.length; i++) {
            if (word.equalsIgnoreCase(numberWords[i])) {
                return i;
            }
        }

        try {
            return Integer.parseInt(word);
        } catch (NumberFormatException e) {
            throw new IllegalArgumentException("Invalid number: " + word);
        }
    }

}
