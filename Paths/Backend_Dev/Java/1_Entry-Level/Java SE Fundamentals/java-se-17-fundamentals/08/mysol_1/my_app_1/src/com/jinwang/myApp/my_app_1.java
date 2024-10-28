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

    static void performCalculations() {
        MathEquation[] equations = new MathEquation[4];
        equations[0] = create(100.0d, 50.0d, 'd');
        equations[1] = create(25.0d, 92.0d, 'a');
        equations[2] = create(225.0d, 17.0d, 's');
        equations[3] = create(11.0d, 3.0d, 'm');

        for(MathEquation equation : equations) {
            equation.execute();
            System.out.println("result = " + equation.getResult());
        }
    }


}
