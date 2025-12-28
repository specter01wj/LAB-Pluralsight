package com.jinwang;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class Main {

    public static void main(String[] args) {

        if (args.length == 0) {
            System.out.println("Please provide the input file name.");
            return;
        }

        try (BufferedReader reader = new BufferedReader(new FileReader(args[0]))) {
            processFile(reader);

        } catch (InvalidStatementException ex) {
            System.out.println("Invalid statement: " + ex.getMessage());
            if (ex.getCause() != null) {
                System.out.println("  caused by: " + ex.getCause().getMessage());
            }

        } catch (IOException ex) {
            System.out.println("I/O error: " + ex.getMessage());

        } catch (Exception ex) {
            System.out.println("Unexpected error: " + ex.getMessage());
        }
    }

    private static void processFile(BufferedReader reader)
            throws IOException, InvalidStatementException {

        String inputLine;
        while ((inputLine = reader.readLine()) != null) {
            performOperation(inputLine);
        }
    }

    private static void performOperation(String inputLine)
            throws InvalidStatementException {

        try {
            String[] parts = inputLine.trim().split("\\s+");

            if (parts.length != 3) {
                throw new InvalidStatementException(
                        "Statement must have exactly 3 parts: operation leftVal rightVal");
            }

            MathOperation operation =
                    MathOperation.valueOf(parts[0].toUpperCase());

            int leftVal = valueFromWord(parts[1]);
            int rightVal = valueFromWord(parts[2]);

            int result = execute(operation, leftVal, rightVal);
            System.out.println(inputLine + " = " + result);

        } catch (InvalidStatementException ex) {
            // already meaningful, just propagate
            throw ex;

        } catch (Exception ex) {
            // wrap all other errors
            throw new InvalidStatementException(
                    "Error processing statement: " + inputLine, ex);
        }
    }

    static int execute(MathOperation operation, int leftVal, int rightVal) {

        return switch (operation) {
            case ADD      -> leftVal + rightVal;
            case SUBTRACT -> leftVal - rightVal;
            case MULTIPLY -> leftVal * rightVal;
            case DIVIDE   -> {
                if (rightVal == 0) {
                    throw new IllegalArgumentException(
                            "Zero rightVal not permitted with divide operation");
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
