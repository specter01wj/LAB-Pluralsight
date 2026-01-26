package com.jinwang;

public class MyApp {

    public static void main(String[] args) {
        System.out.println(">>> Advanced Generics: TreeNode Example <<<\n");

        System.out.println("Step 1: Create leaf nodes");
        var three = new LeafNode<>(3);
        var five = new LeafNode<>(5);
        System.out.println("LeafNode three: " + three);
        System.out.println("LeafNode five: " + five);

        System.out.println("\nStep 2: Create tree structure");
        var tree = new InnerNode<>(new LeafNode<>(2), new InnerNode<>(three, five));
        System.out.println("Tree structure: " + tree);

        System.out.println("\n✅ Study complete.");
    }

}
