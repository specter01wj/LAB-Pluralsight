package com.jinwang;

/**
 * Example 5: Suppressed exceptions.
 */
public class MyApp {

    public static void main(String[] args) {
        System.out.println(">>> Chapter 10 – Example 5: Suppressed Exceptions <<<");

        try (
                var r1 = new ExampleResource("1");
                var r2 = new ExampleCloseThrowsResource("2")
        ) {
            System.out.println("Inside the try-block");
            throw new Exception("Exception thrown in try-block");
        } catch (Exception e) {
            System.out.println("Inside the catch-block");
            e.printStackTrace(System.out); // Prints suppressed exceptions

            // Optional: Print suppressed exceptions individually
            Throwable[] suppressed = e.getSuppressed();
            for (Throwable t : suppressed) {
                System.out.println("Suppressed: " + t);
            }
        }

        System.out.println("✅ Example 5 complete.\n");
    }
}
