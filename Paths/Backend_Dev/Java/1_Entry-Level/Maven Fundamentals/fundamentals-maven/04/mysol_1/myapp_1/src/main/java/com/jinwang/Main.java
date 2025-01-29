package com.jinwang;

import org.hibernate.Session;
import org.hibernate.Transaction;

public class Main {
    public static void main(String[] args) {
      System.out.println("Starting Hibernate example...");

      // Open Hibernate session
      Session session = HibernateUtil.getSessionFactory().openSession();
      Transaction transaction = session.beginTransaction();

      // Create a new user and save to DB
      User user = new User("Jin Wang");
      session.save(user);

      // Commit transaction and close session
      transaction.commit();
      session.close();

      System.out.println("User saved successfully!");
    }
}
