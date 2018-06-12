/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package typeconversion_1;

/**
 *
 * @author jameswang
 */
public class Typeconversion_1 {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        // TODO code application logic here
        float floatVal = 1.0f;
        double doubleVal = 4.0d;
        byte byteVal = 7;
        short shortVal = 7;
        long longVal = 5;

        short result1 = (short)byteVal;
        short result2 = (short)(byteVal - longVal);
        double result3 = longVal - doubleVal;
        long result4 = (long)(shortVal - longVal + floatVal + doubleVal);

        System.out.println(result1);
        System.out.println(result2);
        System.out.println(result3);
        System.out.println(result4);
        
        System.out.println("Success");
    }
    
}
