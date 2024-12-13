package com.pluralsight.alarms;

public class UsingObjects {
    public static void main(String[] args) {
        Alarm alarm = new Alarm("Temperature too high");
        System.out.println(alarm.active);
        System.out.println(alarm.message);
        System.out.println(alarm.getReport());
        alarm.turnOn();
        System.out.println(alarm.active);
        System.out.println(alarm.getReport());
    }
}
