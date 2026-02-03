package com.jinwang;

import java.util.Objects;

public class ToStringLoggableFormatter implements LoggableFormatter {

    @Override
    public String format(Object value) {
        return Objects.toString(value);
    }
}
