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

    }

}
