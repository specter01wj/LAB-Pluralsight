package com.jinwang.orders1;

public class InboundOrder {

    public static void main(String[] args) {
        InboundOrder testInboundOrder = new InboundOrder();
        String customerType = "silver";
        out("customer type: " + customerType);
        testInboundOrder.tagOrder(customerType);
    }

    public void tagOrder(String customerType) {
        switch (customerType) {
            case "bronze" -> out("Tag: level2");
            case "silver" -> out("Tag: level3");
            case "gold" -> out("Tag: level4");
            default -> out("Tag: level1");
        }
    }

    public static void out(Object o) {
        System.out.println(o.toString());
    }

}
