package com.jinwang;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class CourseRetriever {

    private static final Logger logger =
            LoggerFactory.getLogger(CourseRetriever.class);

    public static void main(String... args) {

        logger.info("Application started");
        logger.warn("This is a warning");
        logger.error("Something went wrong");

        logger.info("Starting CourseRetriever application");

        if (args.length == 0) {
            logger.error("No author name provided. Please pass an author name as first argument.");
            return;
        }

        try {
            retrieveCourses(args[0]);
        } catch (Exception e) {
            logger.error("Unexpected error while retrieving courses", e);
        }

    }

    private static void retrieveCourses(String authorId) {
        logger.info("Retrieving courses for author '{}'", authorId);
    }

}
