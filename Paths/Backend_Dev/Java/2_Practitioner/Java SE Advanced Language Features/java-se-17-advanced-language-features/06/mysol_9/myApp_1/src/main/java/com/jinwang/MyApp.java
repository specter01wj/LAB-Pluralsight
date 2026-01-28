package com.jinwang;

public class MyApp {

    public static void main(String[] args) {
        System.out.println(">>> Advanced Generics: Type Erasure with Bounded Type Parameters <<<\n");

        System.out.println("Step 1: Create LeafNode objects using Comparable");
        var two = new LeafNode(2);
        var three = new LeafNode(3);
        var five = new LeafNode(5);

        System.out.println("Leaf nodes:");
        System.out.println("• " + two);
        System.out.println("• " + three);
        System.out.println("• " + five);

        System.out.println("\nStep 2: Build tree structure");
        TreeNode tree = new MaxValueInnerNode(two, new MaxValueInnerNode(three, five));
        System.out.println("Tree structure:\n" + tree);

        System.out.println("\nStep 3: Find max value at root");
        System.out.println("Max value at root: " + tree.getValue());

        System.out.println("\n✅ Study complete.\n");
    }

}
