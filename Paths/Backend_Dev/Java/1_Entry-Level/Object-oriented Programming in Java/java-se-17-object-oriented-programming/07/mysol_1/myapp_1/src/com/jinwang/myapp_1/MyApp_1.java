package com.jinwang.myapp_1;
import java.util.*;

public class MyApp_1 extends Alarm {

    // PrioritizedAlarm
    private final int priority;

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
    }

    public static void main(String[] args) throws InterruptedException {
        // PrioritizedAlarm
        System.out.println(new MyApp_1("Temperature too high", 1));
    }

}
