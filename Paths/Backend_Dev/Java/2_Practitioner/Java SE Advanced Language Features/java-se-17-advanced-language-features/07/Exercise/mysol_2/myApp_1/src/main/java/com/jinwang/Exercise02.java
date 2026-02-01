package com.jinwang;

import java.util.List;
import java.util.function.Consumer;

public class Exercise02 {

    public void formatAndSendMail(String title, String content, List<Customer> customers, Object emailSender) {
        @SuppressWarnings("unchecked")
        Consumer<Email> sender = (Consumer<Email>) emailSender;

        customers.stream()
                .map(c -> new Email(c.emailAddress(), title, String.format(content, c.name())))
                .forEach(sender);
    }
}
