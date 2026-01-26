package com.jinwang;

public class MyApp {

    public static void main(String[] args) {
        System.out.println(">>> Advanced Generics: Extending Generic Type <<<\n");

        System.out.println("Step 1: Build Tree with IntegerSummingInnerNode");
        var tree = new IntegerSummingInnerNode(
                new LeafNode<>(2),
                new IntegerSummingInnerNode(
                        new LeafNode<>(3),
                        new LeafNode<>(5)
                )
        );

        System.out.println("Tree structure:\n" + tree);

        System.out.println("\nStep 2: Get total sum stored at root:");
        System.out.println("Root value (sum): " + tree.getValue());

        System.out.println("\n✅ Study complete.");
    }

}
