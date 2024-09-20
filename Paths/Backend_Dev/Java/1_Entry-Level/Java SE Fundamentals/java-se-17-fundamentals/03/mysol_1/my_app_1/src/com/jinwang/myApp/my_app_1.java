package com.jinwang.myApp;
import java.util.*;

public class my_app_1 {

    public static void main(String[] args) {
        my_app_1 sol = new my_app_1();
        sol.testMyApp();
    }

    public void testMyApp() {
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

}
