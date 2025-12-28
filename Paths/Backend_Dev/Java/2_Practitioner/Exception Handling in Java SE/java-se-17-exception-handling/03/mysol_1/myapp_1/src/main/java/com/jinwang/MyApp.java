package com.jinwang;

import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;

public class MyApp {

    public static void main(String[] args) {
        // Exception Can be handled by Type
        /*int i = 12, j = 2;
        try {
            int result = i / (j - 2);
            System.out.println(result);
        } catch (ArithmeticException ex) {
            System.out.println("Invalid math operation - : " + ex.getMessage());
        } catch (Exception ex) {
            System.out.println("Error: " + ex.getMessage());
            ex.printStackTrace();
        }
        System.out.println("Continue work!");*/

        if (args.length == 0) {
            System.out.println("Please provide the input file name.");
            return;
        }

        try (BufferedReader reader = new BufferedReader(new FileReader(args[0]))) {
            processFile(reader);

        } catch (FileNotFoundException ex) {
            // Most specific checked exception
            System.out.println("File not found: " + args[0]);

        } catch (IOException ex) {
            // Other I/O problems
            System.out.println("I/O error: " + ex.getMessage());

        } catch (Exception ex) {
            // Catch-all for unexpected runtime issues
            System.out.println("Error processing file: " + ex.getMessage());
        }
    }

    private static void processFile(BufferedReader reader) throws IOException {
        String inputLine;
        while ((inputLine = reader.readLine()) != null) {
            performOperation(inputLine);
        }
    }

    private static void performOperation(String inputLine) {
        String[] parts = inputLine.trim().split("\\s+");
        if (parts.length != 3) {
            throw new IllegalArgumentException("Invalid input: " + inputLine);
        }

        MathOperation operation = MathOperation.valueOf(parts[0].toUpperCase());
        int leftVal = valueFromWord(parts[1]);
        int rightVal = valueFromWord(parts[2]);

        int result = execute(operation, leftVal, rightVal);
        System.out.println(inputLine + " = " + result);
    }

    static int execute(MathOperation operation, int leftVal, int rightVal) {
        return switch (operation) {
            case ADD      -> leftVal + rightVal;
            case SUBTRACT -> leftVal - rightVal;
            case MULTIPLY -> leftVal * rightVal;
            case DIVIDE   -> {
                if (rightVal == 0) {
                    throw new ArithmeticException("Division by zero");
                }
                yield leftVal / rightVal;
            }
        };
    }

    static int valueFromWord(String word) {
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
        } catch (NumberFormatException ex) {
            throw new IllegalArgumentException("Invalid number: " + word);
        }
    }

}
