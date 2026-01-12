package com.jinwang;

import java.util.regex.Pattern;

import static com.jinwang.Validation.checkThat;

public record EmailAddress(String value) {

    private static final Pattern EMAIL_PATTERN = Pattern.compile(".+@.+\\..+");

    public EmailAddress {
        checkThat(value != null && !value.isBlank(), "value must not be null or blank");
        checkThat(EMAIL_PATTERN.matcher(value).matches(), "not a valid email address: " + value);
    }

    @Override
    public String toString() {
        return value;
    }
}
