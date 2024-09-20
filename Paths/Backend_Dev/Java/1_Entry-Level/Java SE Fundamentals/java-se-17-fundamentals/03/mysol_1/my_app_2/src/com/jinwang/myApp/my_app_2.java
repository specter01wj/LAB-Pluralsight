package com.jinwang.myApp;
import java.util.*;

public class my_app_2 {

    public static void main(String[] args) {
        my_app_2 sol = new my_app_2();
        sol.testMyApp_1();
    }

    public void testMyApp_1() {
        float floatVal = 1.0f;
        double doubleVal = 4.0d;
        byte byteVal = 7;
        short shortVal = 7;
        long longVal = 5;

        System.out.println("floatVal: " + floatVal);
        System.out.println("doubleVal: " + doubleVal);
        System.out.println("byteVal: " + byteVal);
        System.out.println("shortVal: " + shortVal);
        System.out.println("longVal: " + longVal);

        short result1 = (short) longVal;
        short result2 = (short) (byteVal - longVal);
        float result3 = longVal - floatVal;

        System.out.println("result1: " + result1);
        System.out.println("result2: " + result2);
        System.out.println("result3: " + result3);

        System.out.println("Success");

    }

}
