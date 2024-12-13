package com.pluralsight.alarms;

public class NoAliasingForPrimitives {
    public static void main(String[] args) {
        int integer1 = 41;
        int integer2 = integer1;
        integer1++;
        System.out.println(integer1);
        System.out.println(integer2);
    }
}
