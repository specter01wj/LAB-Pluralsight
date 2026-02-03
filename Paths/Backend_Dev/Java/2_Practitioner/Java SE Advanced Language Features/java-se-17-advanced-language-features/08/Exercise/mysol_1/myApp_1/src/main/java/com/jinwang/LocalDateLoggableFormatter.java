package com.jinwang;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.Objects;

public class LocalDateLoggableFormatter implements LoggableFormatter {

    private static final DateTimeFormatter FORMATTER =
            DateTimeFormatter.ofPattern("M/d/yyyy");

    @Override
    public String format(Object value) {
        return value instanceof LocalDate date
                ? FORMATTER.format(date)
                : Objects.toString(value);
    }
}
