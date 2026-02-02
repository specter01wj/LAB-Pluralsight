import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.lang.reflect.InvocationTargetException;
import java.util.Set;
import java.util.stream.Collectors;

/**
 * Utility methods for working with classes.
 */
public final class ClassUtils {

    private ClassUtils() {
        // Prevent instantiation
    }

    /**
     * Finds the names of all classes in a package.
     *
     * @param packageName The name of the package.
     * @return A set containing the fully-qualified names of all classes in the package.
     * @throws IOException If an I/O exception occurs while inspecting the package.
     */
    public static Set<String> findClassNames(String packageName) throws IOException {
        String path = packageName.replace('.', '/');

        try (InputStream in = ClassLoader.getSystemResourceAsStream(path)) {
            if (in == null) {
                throw new IllegalArgumentException("Package not found: " + packageName);
            }

            return new BufferedReader(new InputStreamReader(in))
                    .lines()
                    .filter(line -> line.endsWith(".class"))
                    .map(className -> packageName + "." + className.substring(0, className.length() - 6))
                    .collect(Collectors.toUnmodifiableSet());
        }
    }

    public static <T> T newInstance(Class<? extends T> cls) {
        try {
            return cls.getDeclaredConstructor().newInstance();
        } catch (InstantiationException | IllegalAccessException |
                 InvocationTargetException | NoSuchMethodException e) {
            throw new IllegalArgumentException("Failed to instantiate class: " + cls.getName(), e);
        }
    }
}
