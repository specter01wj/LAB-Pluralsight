/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package calcengine_1;

/**
 *
 * @author jinwang
 */
public class MathEquation {
    
    public double leftVals;
    public double rightVals;
    public char opCodes;
    public double results;
    
    public void execute() {
        switch(opCodes) {
                case 'a':
                    results = leftVals + rightVals;
                    break;
                case 's':
                    results = leftVals - rightVals;
                    break;
                case 'd':
                    results = rightVals != 0.0d ? leftVals / rightVals : 0.0d;
                    break;
                case 'm':
                    results = leftVals * rightVals;
                    break;
                default:
                    System.out.println("Error - invalid opCode");
                    results = 0.0d;
                    break;
            }
    }
    
}
