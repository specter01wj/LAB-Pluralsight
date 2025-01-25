package com.jinwang.myapp_1;

import java.util.ArrayList;
import java.util.List;

public class MyApp_1 {


    private final List<Alarm> allAlarms = new ArrayList<>();

    public void add(Alarm alarm) {
        alarm.turnOn();
        allAlarms.add(alarm);
    }

    public void printBigReport() {
        for (Alarm alarm: allAlarms)
            System.out.println(alarm.getReport(true));
    }

    public static void main(String[] args) {

        // HighVisibilityAlarm
        /*HighVisibilityAlarm alarm = new HighVisibilityAlarm("Pressure low");
        alarm.turnOn();
        String report = alarm.getReport();
        System.out.println("HighVisibilityAlarm report: " + report);*/

        /*Alarm alarm = new HighVisibilityAlarm("Pressure low");
        alarm.turnOn();
        String report = alarm.getReport();
        System.out.println("HighVisibilityAlarm report: " + report);*/

        // PrioritizedAlarm
//        PrioritizedAlarm alarm = new PrioritizedAlarm("Pressure low", 1);


        MyApp_1 dashboard = new MyApp_1();

        dashboard.add(new PrioritizedAlarm("Temperature too high", 42));
        dashboard.add(new HighVisibilityAlarm("Pressure too low"));
        dashboard.add(new TimeSensitiveAlarm("Never mind the other alarms, you're late for dinner"));

        dashboard.printBigReport();

    }

}
