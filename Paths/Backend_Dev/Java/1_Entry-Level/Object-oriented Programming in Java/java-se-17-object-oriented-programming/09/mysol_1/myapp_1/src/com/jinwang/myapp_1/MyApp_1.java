package com.jinwang.myapp_1;

public class MyApp_1 {

    private static void activate(Alarm alarm) {
        alarm.turnOn();
    }

    private static void printHelpText(Widget widget) {
        System.out.println(widget.getHelpText());
    }

    private static void saveItTwice(PersistentObject persistentObject) {
        persistentObject.save();
        persistentObject.save();
    }

    public static void main(String[] args) {
        HighVisibilityAlarm alarm = new HighVisibilityAlarm("Hello there!");
        activate(alarm);
        printHelpText(alarm);
        saveItTwice(alarm);
    }

}
