package com.jinwang;

import java.util.UUID;

public class Exercise02 {

    static final UUID TEST_UUID = UUID.randomUUID();

    static class Nested {
        static final UUID TEST_UUID = UUID.randomUUID();

        void run() {
            // Print TEST_UUID from Nested
            System.out.println("Nested.TEST_UUID: " + TEST_UUID);

            // Print TEST_UUID from enclosing class Exercise02
            System.out.println("Exercise02.TEST_UUID: " + Exercise02.TEST_UUID);
        }
    }

}
