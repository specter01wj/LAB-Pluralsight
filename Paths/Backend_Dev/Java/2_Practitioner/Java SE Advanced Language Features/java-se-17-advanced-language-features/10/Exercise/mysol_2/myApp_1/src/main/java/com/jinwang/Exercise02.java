package com.jinwang;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.function.Consumer;

/**
 * Exercise 2: Implementing AutoCloseable.
 */
public class Exercise02 {

    public static class TempFile implements AutoCloseable {
        private final Path path;

        public TempFile() throws IOException {
            this.path = Files.createTempFile(null, null);
        }

        public Path getPath() {
            return path;
        }

        @Override
        public void close() throws IOException {
            Files.deleteIfExists(path);
        }
    }

    public static void doWithTempFile(Consumer<Path> consumer) throws IOException {
        try (TempFile tempFile = new TempFile()) {
            consumer.accept(tempFile.getPath());
        }
    }
}
