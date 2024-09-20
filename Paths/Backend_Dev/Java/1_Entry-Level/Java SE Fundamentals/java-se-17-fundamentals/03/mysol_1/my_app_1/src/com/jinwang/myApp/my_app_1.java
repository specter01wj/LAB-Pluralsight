package com.jinwang.myApp;
import java.util.*;

public class my_app_1 {

    public static void main(String[] args) {
        my_app_1 sol = new my_app_1();
        sol.testMyApp_1();
        sol.testMyApp_2();
    }

    public void testMyApp_1() {
        int someVal = 5;
        System.out.println(++someVal);
        System.out.println(someVal);

        int someVal_2 = 5;
        System.out.println(someVal_2++);
        System.out.println(someVal_2);

        int myVal_1 = 50;
        myVal_1 -= 5;
        System.out.println(myVal_1);

        int myVal_2 = 100;
        int val1 = 5, val2 = 10;
        System.out.println(myVal_2 /= val1 * val2);

    }

    public void testMyApp_2() {
        int valA = 21;
        int valB = 6;
        int valC = 3;
        int valD = 1;

        int result1 = valA - valB / valC;
        int result2 = (valA - valB) / valC;

        System.out.println(result1);
        System.out.println(result2);

        int result3 = valA / valC * valD + valB;
        int result4 = valA / (valC * (valD + valB));

        System.out.println(result3);
        System.out.println(result4);

    }

}
