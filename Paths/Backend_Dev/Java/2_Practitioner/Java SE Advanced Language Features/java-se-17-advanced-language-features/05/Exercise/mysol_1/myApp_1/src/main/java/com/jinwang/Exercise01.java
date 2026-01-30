package com.jinwang;

public class Exercise01 {

    private static String getMessageStatic() {
        return "Hello from a static method in the enclosing class";
    }

    private String getMessageInstance() {
        return "Hello from an instance method in the enclosing class";
    }

    // ✅ Static nested class inside Exercise01
    public static class Nested {
        public void run() {
            System.out.println(getMessageStatic());
        }
    }

}
