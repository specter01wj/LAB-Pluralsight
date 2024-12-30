package com.jinwang.myapp_1;
import java.util.*;

public class MyApp_1 {

    public static void main(String[] args) {

        // UsingObjects
        Alarm alarm = new Alarm("Temperature too high");
        System.out.println(alarm.active);
        System.out.println(alarm.message);
        System.out.println(alarm.getReport());
        alarm.turnOn();
        System.out.println(alarm.active);
        System.out.println(alarm.getPrivateReport(true));

        // Aliasing
        Alarm alarm1 = new Alarm("");
        System.out.println(alarm1.active);
        Alarm alarm2 = alarm1;
        alarm2.turnOn();
        System.out.println(alarm2.active);
        System.out.println(alarm1.active);

        // NoAliasingForPrimitives
        int integer1 = 41;
        int integer2 = integer1;
        integer1++;
        System.out.println(integer1);
        System.out.println(integer2);

        // FinalDoesNotMeanImmutable
        final Alarm alarm3 = new Alarm("");
        System.out.println(alarm3.active);
        alarm3.turnOn();
        System.out.println(alarm3.active);

        // EqualityAndIdentity
        String s1 = "test string";
        String s2 = "test string";
        System.out.println(s1.equals(s2));  // true
        System.out.println(s1 == s2);

        // AutoboxingAndUnboxing
        int aPrimitive = 42;

        List<Object> myList = new ArrayList<>();
        myList.add(aPrimitive);

        Integer anObject = aPrimitive;

        int anotherPrimitive = anObject;
        System.out.println(anotherPrimitive);
        
    }

}
