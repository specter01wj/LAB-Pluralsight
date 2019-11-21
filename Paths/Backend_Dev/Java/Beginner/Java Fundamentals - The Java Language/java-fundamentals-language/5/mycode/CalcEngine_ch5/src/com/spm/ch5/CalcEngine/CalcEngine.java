package com.spm.ch5.CalcEngine;

public class CalcEngine {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
//		double[] leftVals = {100.0d, 25.0d, 225.0d, 11.0d};
//        double[] rightVals = {50.0d, 92.0d, 17.0d, 3.0d};
//        char[] opCodes = {'d', 'a', 's', 'm'};
//        double[] results = new double[opCodes.length];
		
		MathEquation[] equations = new MathEquation[4];

        for(int i = 0; i < opCodes.length; i++) {
            
        }
        for(double theResult : results) {
            System.out.print("result = ");
            System.out.println(theResult);
        }
	}
	
	public static MathEquation create(double leftVal, double rightVal, char opCode) {
        MathEquation equation = new MathEquation();
        equation.setLeftVal(leftVal);
        equation.setRightVal(rightVal);
        equation.setOpCode(opCode);

        return equation;
    }

}
