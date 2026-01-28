package com.jinwang;

public class MyApp {

    public static void main(String[] args) {
        System.out.println(">>> Advanced Generics: Type Erasure Study <<<\n");

        System.out.println("Step 1: Create LeafNode objects WITHOUT generics");
        LeafNode three = new LeafNode(3);
        LeafNode five = new LeafNode(5);
        LeafNode two = new LeafNode(2);

        System.out.println("Leaf nodes:");
        System.out.println("• " + three);
        System.out.println("• " + five);
        System.out.println("• " + two);

        System.out.println("\nStep 2: Build tree structure");
        TreeNode tree =
                new InnerNode(
                        two,
                        new InnerNode(three, five)
                );

        System.out.println("Tree structure:");
        System.out.println(tree);

        System.out.println("\nStep 3: Inspect runtime types");
        System.out.println("three.getValue().getClass(): " + three.getValue().getClass());
        System.out.println("five.getValue().getClass(): " + five.getValue().getClass());

        System.out.println("\nKey observations:");
        System.out.println("• No generic type information at runtime");
        System.out.println("• All values are treated as Object");
        System.out.println("• Generics exist ONLY at compile time");

        System.out.println("\n✅ Study complete.");
    }

}
