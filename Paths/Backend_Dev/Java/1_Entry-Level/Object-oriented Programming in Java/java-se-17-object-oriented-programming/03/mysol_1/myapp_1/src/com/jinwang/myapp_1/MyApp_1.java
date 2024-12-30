package com.jinwang.myapp_1;

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

        // NoAliasingForPrimitives
        int integer1 = 41;
        int integer2 = integer1;
        integer1++;
        System.out.println(integer1);
        System.out.println(integer2);

        // FinalDoesNotMeanImmutable
        final Alarm alarm2 = new Alarm("");
        System.out.println(alarm2.active);
        alarm2.turnOn();
        System.out.println(alarm2.active);


    }

}
