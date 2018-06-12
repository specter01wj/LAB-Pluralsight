/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package mathorder_1;

/**
 *
 * @author jameswang
 */
public class Mathorder_1 {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        // TODO code application logic here
        int valA = 21;
        int valB = 6;
        int valC = 3;
        int valD = 1;

        int result1 = valA - valB / valC;

        int result2 = (valA - valB) / valC;
        
        System.out.println(result1);
        System.out.println(result2);
        
        int result3 = valA / valC * valD + valB;

        int result4 = valA / (valC * (valD + valB));

        System.out.println(result3);
        System.out.println(result4);
    }
    
}
