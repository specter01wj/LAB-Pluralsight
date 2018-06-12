/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package letsgetlogical_1;

/**
 *
 * @author jameswang
 */
public class Letsgetlogical_1 {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        // TODO code application logic here
        int students = 150;
        int rooms = 3;
        
        if(rooms > 0 && students/rooms > 30) {
            System.out.println("Crowded!!!");
        }
        
        System.out.println();
        System.out.println("** end program **");
        
    }
    
}
