package com.pluralsight.alarms;

public class EqualityAndIdentity {
    public static void main(String[] args) {
        String s1 = "test string";
        String s2 = "test string";
        System.out.println(s1.equals(s2));  // true
        System.out.println(s1 == s2);       // also true because of string interning!
    }
}
