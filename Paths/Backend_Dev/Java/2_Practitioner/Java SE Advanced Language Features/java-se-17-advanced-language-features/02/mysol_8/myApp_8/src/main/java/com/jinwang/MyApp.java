package com.jinwang;

public class MyApp {

    public static void main(String[] args) {
        // ⚠️ Prone to error — stringly typed: easy to mix up parameter order
        var customer1 = new Customer1(500567L, "joes", "Joe", "Smith", "joe.smith@example.com");
        System.out.println(customer1);

        // ✅ Safer — domain-specific types make argument order obvious
        var customer2 = new Customer2(
                500567L,
                new FullName("Joe", "Smith"),
                new NickName("joes"),
                new EmailAddress("joe.smith@example.com")
        );
        System.out.println(customer2);
    }

}
