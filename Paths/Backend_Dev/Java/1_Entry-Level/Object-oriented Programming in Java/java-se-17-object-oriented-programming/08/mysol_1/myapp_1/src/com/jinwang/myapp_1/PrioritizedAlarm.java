package com.jinwang.myapp_1;

public class PrioritizedAlarm extends Alarm  {

    private final int priority;

    public PrioritizedAlarm(String message, int priority) {
        super(message);
        this.priority = priority;
    }

    public int getPriority() {
        return priority;
    }

}
