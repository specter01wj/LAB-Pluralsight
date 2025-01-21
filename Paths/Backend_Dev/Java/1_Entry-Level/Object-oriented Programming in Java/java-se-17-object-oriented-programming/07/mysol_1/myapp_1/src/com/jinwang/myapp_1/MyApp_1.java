package com.jinwang.myapp_1;
import java.util.*;

public class MyApp_1 extends Alarm {

    // PrioritizedAlarm
    /*private final int priority;

    MyApp_1(String message, int priority) {
        super(message);
        this.priority = priority;
    }

    public int getPriority() {
        return priority;
    }

    @Override
    public String toString() {
        return "MyApp_1 [Message=" + getMessage() + ", Active=" + active + ", Priority=" + getPriority() + "]";
    }*/

    // HighVisibilityAlarm
    public MyApp_1(String message) {
        super(message);
    }

    @Override
    public String getReport(boolean uppercase) {
        String report = super.getReport(uppercase);
        if (report.isEmpty()) {
            return report;
        } else {
            return report + "!";
        }
    }

    public static void main(String[] args) throws InterruptedException {
        // PrioritizedAlarm
//         System.out.println(new MyApp_1("Temperature too high", 1));

        // HighVisibilityAlarm
        MyApp_1 alarm = new MyApp_1("Test message");
        alarm.turnOn();
        alarm.sendReport();
    }

}
