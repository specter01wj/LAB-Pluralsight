package com.globomantics.slides;

public class Samples {

  public static void main(String[] args) {

  }

  public void stringExample(){

    String multi1 =
        "this is an example\n" +
            "of a multi-line string\n" +
            "be sure to remember newlines\n";

    System.out.println(multi1);

    String multi2 =
        """
        this is another way 
        to create a multi-line string.
        It's easier to create and edit.
        """;

    System.out.println(multi2);

    System.out.println("done");
  }

  public void switchSample1(){
    String color = "red";

    switch (color) {
      case "red":
        System.out.println("In red");
        break;
      case "orange":
        System.out.println("In orange");
        break;
      case "yellow":
        System.out.println("In yellow");
        break;
      default:
        System.out.println("In default");
        break;
    }
  }

  public void switchSample2(){
    String color = "red";

    switch (color) {
      case "red":
        System.out.println("In red");
      case "orange":
        System.out.println("In orange");
      case "yellow":
        System.out.println("In yellow");
      default:
        System.out.println("In default");
    }

  }

  public void switchSample3(){
    String color = "red";

    switch (color) {
      case "red" -> System.out.println("In red");
      case "orange" -> System.out.println("In orange");
      case "yellow" -> System.out.println("In yellow");
      default -> System.out.println("In default");
    }

  }

  public void ifSample1(){
    int a = 1;
    int b = 1;
    int c = 2;

    if (a==b)
      doTrue();
    else
      doFalse();

    if (a==c)
      doTrue();
    else
      doFalse();

    if (a==b) {
      doTrue();
    } else {
      doFalse();
    }

    if (a==c) {
      doTrue();
    } else {
      doFalse();
    }

    if (a==b)
    {
      doTrue();
    }
    else
    {
      doFalse();
    }

    if (a==c)
    {
      doTrue();
    }
    else
    {
      doFalse();
    }

    if (a==b){doTrue();}else{doFalse();}

    if (a==c){doTrue();}else{doFalse();}

    if (a==b)doTrue();else doFalse();

    if (a==c)doTrue();else doFalse();
  }

  public void ifWithAssignmentOperator(){

    boolean a = true;
    boolean b = false;
    System.out.println(a);
    System.out.println(b);
    if (a=b) {
      doTrue();
    } else {
      doFalse();
    }
    System.out.println(a);
    System.out.println(b);
  }

  public void ifWithAssignmentOperatorSS(){

    boolean a = true;
    boolean b = false;
    if (a=b) {
      doTrue();
    } else {
      doFalse();
    }

  }

  public void ifWithEqualityOperator(){

    boolean a = true;
    boolean b = false;
    System.out.println(a);
    System.out.println(b);
    if (a==b) {
      doTrue();
    } else {
      doFalse();
    }
    System.out.println(a);
    System.out.println(b);
  }

  public void ifWithEqualityOperatorSS(){

    boolean a = true;
    boolean b = false;
    if (a==b) {
      doTrue();
    } else {
      doFalse();
    }

  }

  public void equalsTest() {

    Bucket one = new Bucket(10, "red");
    Bucket two = new Bucket(10, "red");
    if (one.equals(two)) {
      doTrue();
    } else {
      doFalse();
    }

    if (one == two) {
      doTrue();
    } else {
      doFalse();
    }

    Bucket three = one;
    if (one == three) {
      doTrue();
    } else {
      doFalse();
    }
  }


  private void doTrue(){
    System.out.println("true");
  }

  private void doFalse(){
    System.out.println("false");
  }

  public double calcTot(double prc, double rt, double dr){
    double disc = prc * dr;
    double subTot = prc - disc;
    double tx = subTot * rt;
    double tot = subTot + tx;
    return tot;
  }

  public double calculateTotal(double price, double taxRate, double discountRate){
    double discount = price * discountRate;
    double subTotal = price - discount;
    double tax = subTotal * taxRate;
    double total = subTotal + tax;
    return total;
  }

}
