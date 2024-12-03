package com.globomantics.orders;

public class OrderProcess {

  public String[] getTopOrders(String[] orderList, int topSize, int totalOrders) {
    if (topSize > orderList.length){
      topSize = orderList.length;
    }
    String[] topOrders = new String[topSize];
    for (int i = 0; i < topSize; i++) {
      topOrders[i] = orderList[i];
    }
    //newMethod();
    double topPercent = 0;
    if (totalOrders != 0){
      topPercent = (double)topSize / (double)totalOrders;
    }
    out(topPercent);
    calculateShipping(5, .1);
    return topOrders;
  }

  public void newMethod(){
    out("In new method");
  }

  public double calculateShipping(double distance, double costFactor){
    double result = distance * costFactor;
    return result;
  }

  public static void main(String[] args) {
    String[] orderList = {"shirt", "pants", "shoes", "socks", "belt", "coat", "gloves"};
    int topSize = 5;
    int totalOrders = 7;
    OrderProcess orderProcess = new OrderProcess();
    String[] topList = orderProcess.getTopOrders(orderList, topSize, totalOrders);

    for (String order: topList) {
      out(order);
    }
  }

  public static void out(Object o) {
    System.out.println(o);
  }

}








