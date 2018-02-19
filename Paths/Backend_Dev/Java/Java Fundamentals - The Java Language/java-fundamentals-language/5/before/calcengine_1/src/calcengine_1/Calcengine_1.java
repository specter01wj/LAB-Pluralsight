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
public class Calcengine_1 {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        // TODO code application logic here
//        double[] leftVals = {100.0d, 25.0d, 225.0d, 11.0d};
//        double[] rightVals = {50.0d, 92.0d, 17.0d, 3.0d};
//        char[] opCodes = {'d', 'a', 's', 'm'};
//        double[] results = new double[opCodes.length];
        MathEquation[] equations = new MathEquation[4];
        //equations[0] = new MathEquation();
        equations[0] = create(100.0d, 50.0d, 'd');
        equations[1] = create(25.0d, 92.0d, 'a');
        equations[2] = create(225.0d, 17.0d, 's');
        equations[3] = create(11.0d, 3.0d, 'm');

//        for(int i = 0; i < opCodes.length; i++) {
//            
//        }
//        for(double theResult : results) {
//            System.out.print("result = ");
//            System.out.println(theResult);
//        }
        for(MathEquation equation : equations) {
            equation.execute();
            System.out.print("result = ");
            System.out.println(equation.results);
        }
    }
    
    public static MathEquation create(double leftVal, double rightVal, char opCode) {
        MathEquation equation = new MathEquation();
        equation.leftVals = leftVal;
        equation.rightVals = rightVal;
        equation.opCodes = opCode;
        
        return equation;
    }
    
}
