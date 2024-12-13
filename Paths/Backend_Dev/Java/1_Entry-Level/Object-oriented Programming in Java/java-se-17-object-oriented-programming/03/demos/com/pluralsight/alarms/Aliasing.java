package com.pluralsight.alarms;

public class Aliasing {
    public static void main(String[] args) {
        Alarm alarm1 = new Alarm("");
        System.out.println(alarm1.active);
        Alarm alarm2 = alarm1;
        alarm2.turnOn();
        System.out.println(alarm2.active);
        System.out.println(alarm1.active);
    }
}
