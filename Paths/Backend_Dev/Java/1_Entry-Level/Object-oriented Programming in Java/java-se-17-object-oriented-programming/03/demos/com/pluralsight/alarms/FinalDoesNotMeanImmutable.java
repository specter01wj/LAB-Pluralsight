package com.pluralsight.alarms;

public class FinalDoesNotMeanImmutable {
    public static void main(String[] args) {
        final Alarm alarm = new Alarm("");
        System.out.println(alarm.active);
        alarm.turnOn();
        System.out.println(alarm.active);
    }
}
