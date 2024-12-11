package com.jinwang.shipping;

public class myAppShipping {

    public static void main(String[] args) {
        myAppShipping testOutboundProcess = new myAppShipping();
        boolean freeShipping = false;
        out("free Shipping: " + freeShipping);
        testOutboundProcess.assignCarrier(freeShipping);
    }

    public void assignCarrier(boolean freeShipping) {
        if (freeShipping) {
            out("Use special carrier.");
        } else {
            out("Use regular carrier.");
        }
        recordShippingCharge(freeShipping);
    }

    public void recordShippingCharge(boolean freeShipping) {
        if (!freeShipping) {
            out("Add $5 shipping charge");
        } else {
            out("No shipping charge");
        }
    }

    public static void out(Object o) {
        System.out.println(o.toString());
    }


}
