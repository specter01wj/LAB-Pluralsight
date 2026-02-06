package com.jinwang;

/**
 * Example 4: Resources are closed before the catch-block is executed.
 */
public class MyApp {

    public static void main(String[] args) {
        System.out.println(">>> Chapter 10 – Example 4: Resources Closed Before Catch <<<");

        try (var r1 = new ExampleResource("1"); var r2 = new ExampleResource("2")) {
            System.out.println("Inside the try-block");
            throw new Exception("Exception thrown in try-block");
        } catch (Exception e) {
            System.out.println("Inside the catch-block");
            e.printStackTrace(System.out);
        }

        System.out.println("✅ Example 4 complete.");
    }
}
