/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package calcengine_2;

/**
 *
 * @author jinwang
 */
public class MathEquation {
    private double leftVals;
    private double rightVals;
    private char opCodes;
    private double results;
    
    public double getLeftVal() {return leftVals;}
    public void setLeftVal(double leftVal) {this.leftVals = leftVal;}
    public double getRightVal() {return rightVals;}
    public void setRightVal(double rightVal) {this.rightVals = rightVal;}
    public char getOpCode() {return opCodes;}
    public void setOpCode(char opCode) {this.opCodes = opCode;}
    
    public double getResult() {return results;}
    
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
