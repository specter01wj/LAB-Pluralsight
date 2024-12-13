package com.pluralsight.alarms;

public class PrioritizedAlarm extends Alarm {

    private final int priority;

    PrioritizedAlarm(String message, int priority) {
        super(message);
        this.priority = priority;
    }

    public int getPriority() {
        return priority;
    }

    public static void main(String[] args) {
        System.out.println(new PrioritizedAlarm("Temperature too high", 1));
    }
}
