package com.pluralsight.alarms;

import java.util.ArrayList;
import java.util.List;

public class AutoboxingAndUnboxing {
    public static void main(String[] args) {
        int aPrimitive = 42;

        List<Object> myList = new ArrayList<>();
        myList.add(aPrimitive);

        Integer anObject = aPrimitive;

        int anotherPrimitive = anObject;
        System.out.println(anotherPrimitive);
    }
}
