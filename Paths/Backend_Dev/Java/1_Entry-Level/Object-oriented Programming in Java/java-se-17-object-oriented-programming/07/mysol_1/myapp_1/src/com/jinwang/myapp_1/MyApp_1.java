package com.jinwang.myapp_1;
import java.util.*;

public class MyApp_1 {

    public static void main(String[] args) throws InterruptedException {
        Alarm alarm = new Alarm("Temperature too high");
        alarm.turnOn();
        alarm.snooze();
        Thread.sleep(600 * 6);
        alarm.sendReport();
    }

}
