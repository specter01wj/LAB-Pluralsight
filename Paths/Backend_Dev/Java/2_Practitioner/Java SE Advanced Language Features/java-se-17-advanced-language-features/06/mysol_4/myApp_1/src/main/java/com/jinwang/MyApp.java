package com.jinwang;

public class MyApp {

    public static void main(String[] args) {
        System.out.println(">>> Advanced Generics: Bounded Type Parameters Study <<<\n");

        System.out.println("Step 1: Build Tree using MaxValueInnerNode");
        TreeNode<Integer> tree = new MaxValueInnerNode<>(
                new LeafNode<>(2),
                new MaxValueInnerNode<>(
                        new LeafNode<>(3),
                        new LeafNode<>(5)
                )
        );

        System.out.println("Tree structure: " + tree);
        System.out.println("Max value at root: " + tree.getValue());

        System.out.println("\n✅ Study complete.");
    }

}
