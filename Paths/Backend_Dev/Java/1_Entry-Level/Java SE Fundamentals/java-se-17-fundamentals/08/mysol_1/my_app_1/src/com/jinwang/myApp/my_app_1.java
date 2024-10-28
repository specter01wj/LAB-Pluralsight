package com.jinwang.myApp;
import java.util.*;

public class my_app_1 {

    public static void main(String[] args) {
        my_app_1 sol = new my_app_1();
        if(args.length == 0) {
            performCalculations();
        } else if(args.length == 1 && args[0].equals("interactive")) {
            executeInteractively();
        } else if(args.length == 3) {
            handleCommandLine(args);
        } else {
            System.out.println("Please provide an operation code and 2 numeric values");\
        }
    }



}
