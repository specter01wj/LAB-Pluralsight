package com.jinwang;

public class Enclosing {

    // Instance field of the enclosing class
    private String name = "Joe Smith";

    public void createInner() {
        // Creating an Inner instance from inside the enclosing instance
        var inner = new Inner();
        inner.run(); // Safe to call here
    }

    /**
     * Inner class:
     * - Cannot exist without an Enclosing instance
     * - Has access to ALL members of Enclosing (even private ones)
     */
    class Inner {

        // This field SHADOWS Enclosing.name
        private String name = "Susan Jones";

        void run() {
            // Refers to Inner.name
            System.out.println(name);

            // Refers to Enclosing.name
            System.out.println(Enclosing.this.name);
        }
    }
}
