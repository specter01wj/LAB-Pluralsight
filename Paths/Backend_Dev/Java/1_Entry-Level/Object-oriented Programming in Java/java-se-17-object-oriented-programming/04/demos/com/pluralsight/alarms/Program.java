package com.pluralsight.alarms;

public class Program {
    public static void main(String[] args) {
        Alarm alarm = new Alarm("Temperature too high");
        alarm.turnOn();
        alarm.sendReport();
    }
}
