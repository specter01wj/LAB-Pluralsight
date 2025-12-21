package com.jinwang;

import com.common.Product;
import com.common.Shipment;

import java.util.*;
import java.util.concurrent.ThreadLocalRandom;
import java.util.stream.IntStream;

public class MyApp {

    private static final Product door = new Product("Wooden Door", 35);
    private static final Product floorPanel = new Product("Floor Panel", 25);
    private static final Product window = new Product("Glass Window", 10);

    public static void main(String[] args) {
        // ShipmentsBreaker
        /*Shipment shipment = new Shipment();

        shipment.add(door);
        shipment.add(window);
        shipment.add(door);
        shipment.add(window);
        shipment.add(floorPanel);

        shipment.prepare();

        List<Product> lightVanProducts = shipment.getLightVanProducts();
        System.out.println("Light Van Products (initial): " + lightVanProducts);

        // This will throw UnsupportedOperationException
        try {
            lightVanProducts.remove(window);
        } catch (UnsupportedOperationException e) {
            System.out.println("Attempted to remove from an unmodifiable list!");
        }

        System.out.println("Light Van Products (after attempted removal): " + shipment.getLightVanProducts());

        System.out.println("Full Shipment Contents:");
        shipment.forEach(System.out::println);*/



        // UnmodifiableVsImmutable
        // Step 1: Create a mutable map
        Map<String, Integer> mutableCountryToPopulation = new HashMap<>();
        mutableCountryToPopulation.put("UK", 67);
        mutableCountryToPopulation.put("USA", 328);
        // Map.copyOf() does not allow null values:
        // mutableCountryToPopulation.put("Wessex", null);  // 🚫 would throw NullPointerException

        // Step 2: Create unmodifiable and immutable views
        Map<String, Integer> unmodifiableCountryToPopulation =
                Collections.unmodifiableMap(mutableCountryToPopulation);

        Map<String, Integer> copiedCountryToPopulation =
                Map.copyOf(mutableCountryToPopulation);  // Immutable snapshot

        // Step 3: Attempting mutation directly (commented out to prevent crash)
        // unmodifiableCountryToPopulation.put("Germany", 83); // 🚫 UnsupportedOperationException
        // copiedCountryToPopulation.put("Germany", 83);       // 🚫 UnsupportedOperationException

        // Step 4: Print before mutating original map
        System.out.println("Before original map mutation:");
        System.out.println("copiedCountryToPopulation = " + copiedCountryToPopulation);
        System.out.println("unmodifiableCountryToPopulation = " + unmodifiableCountryToPopulation);

        // Step 5: Mutate the original (mutable) map
        mutableCountryToPopulation.put("Germany", 83); // ✅ allowed on original

        // Step 6: Print again after mutation
        System.out.println("\nAfter original map mutation:");
        System.out.println("copiedCountryToPopulation = " + copiedCountryToPopulation);            // ❌ does NOT include Germany
        System.out.println("unmodifiableCountryToPopulation = " + unmodifiableCountryToPopulation); // ✅ includes Germany

        // Step 7: Creating an immutable map using Map.of (Java 9+)
        Map<String, Integer> countryToPopulation = Map.of("UK", 67, "USA", 328);
        // countryToPopulation.put("Germany", 83); // 🚫 UnsupportedOperationException



        // CollectionOperations
        List<Product> products = new ArrayList<>(List.of(window, floorPanel, door));
        System.out.println("Original product list:       " + products);

        // Rotate: elements move 2 places to the right
        Collections.rotate(products, 2);
        System.out.println("After rotate(+2):            " + products);

        // Shuffle: random order using thread-safe RNG
        Collections.shuffle(products, ThreadLocalRandom.current());
        System.out.println("After shuffle(random order): " + products);

        // Alphabet generation and binary search
        List<Character> alphabet = makeAlphabet();
        System.out.println("Alphabet:                    " + alphabet);

        int index = Collections.binarySearch(alphabet, 'M');
        System.out.println("Index of 'M':                " + index);
    }

    // Generates a list of characters from A to Z
    private static List<Character> makeAlphabet() {
        return IntStream.rangeClosed('A', 'Z')
                .mapToObj(c -> (char) c)
                .toList(); // Java 16+, otherwise collect(Collectors.toList())
    }

}
