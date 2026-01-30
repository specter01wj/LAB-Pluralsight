package com.jinwang;

public class MyApp {

    public static void main(String[] args) {
        System.out.println(">>> Chapter 6 – Exercise 1: Generic Class <<<");

        LabeledValue<Integer> intVal = new LabeledValue<>("Age", 42);
        LabeledValue<String> strVal = new LabeledValue<>("Name", "Jin Wang");

        System.out.println(intVal.getLabel() + " = " + intVal.getValue());
        System.out.println(strVal.getLabel() + " = " + strVal.getValue());

        System.out.println("\n✅ Exercise 1 complete.");
    }

}
