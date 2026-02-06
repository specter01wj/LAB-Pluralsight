package com.jinwang;

import java.io.IOException;
import java.nio.file.FileVisitResult;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.SimpleFileVisitor;
import java.nio.file.attribute.BasicFileAttributes;

/**
 * Example 6: A temporary directory that automatically deletes itself and all the files and subdirectories in it when it is closed.
 */
public class TempDirectory implements AutoCloseable {

    private final Path directory;

    public TempDirectory(String prefix) throws IOException {
        this.directory = Files.createTempDirectory(prefix);
    }

    public Path getDirectory() {
        return directory;
    }

    @Override
    public void close() throws IOException {
        Files.walkFileTree(directory, new SimpleFileVisitor<>() {
            @Override
            public FileVisitResult visitFile(Path file, BasicFileAttributes attrs) throws IOException {
                Files.delete(file);
                return FileVisitResult.CONTINUE;
            }

            @Override
            public FileVisitResult postVisitDirectory(Path dir, IOException exc) throws IOException {
                if (exc == null) {
                    Files.delete(dir);
                    return FileVisitResult.CONTINUE;
                } else {
                    throw exc;
                }
            }
        });
    }
}
