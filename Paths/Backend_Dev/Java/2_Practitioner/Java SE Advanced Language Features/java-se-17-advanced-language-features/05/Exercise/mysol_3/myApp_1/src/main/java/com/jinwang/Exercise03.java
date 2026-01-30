package com.jinwang;

public class Exercise03 {

    void run() {
        Enclosing enclosing = new Enclosing();
        Enclosing.Inner inner = enclosing.new Inner();
        inner.run();
    }

}
