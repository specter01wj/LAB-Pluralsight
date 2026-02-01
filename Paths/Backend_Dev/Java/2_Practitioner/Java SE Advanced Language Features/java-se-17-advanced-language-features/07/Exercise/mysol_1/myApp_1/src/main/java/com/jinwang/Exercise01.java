package com.jinwang;

import java.util.List;

public class Exercise01 {

    @FunctionalInterface
    public interface EmailSender {
        void send(Email email);
    }

    public void formatAndSendMail(String title, String content, List<Customer> customers, EmailSender emailSender) {
        customers.stream()
                .map(c -> new Email(c.emailAddress(), title, String.format(content, c.name())))
                .forEach(emailSender::send);
    }
}
