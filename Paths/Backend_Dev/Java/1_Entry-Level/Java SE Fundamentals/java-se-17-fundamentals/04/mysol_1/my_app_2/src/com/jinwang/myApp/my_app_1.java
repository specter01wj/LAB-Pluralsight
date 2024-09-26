package com.jinwang.myApp;
import java.util.*;

public class my_app_1 {

    public static void main(String[] args) {
        my_app_1 sol = new my_app_1();
        sol.testMyApp_1();
    }

    public void testMyApp_1() {
        int students = 150;
        int rooms = 0;

        if(rooms != 0 && students/rooms > 30) {
            System.out.println("Crowded");
        }

        System.out.println("");
        System.out.println("*** end of program ***");
    }
}
