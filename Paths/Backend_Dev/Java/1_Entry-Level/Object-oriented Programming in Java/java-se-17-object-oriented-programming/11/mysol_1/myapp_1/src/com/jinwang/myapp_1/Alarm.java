package com.jinwang.myapp_1;

public class Alarm {

    public static final String DOCUMENTATION = "Use turnOn() to activate.";

    protected boolean active;

    public static String getDocumentation() {
        return DOCUMENTATION;
    }

    public void turnOn() {
        active = true;
    }

}
