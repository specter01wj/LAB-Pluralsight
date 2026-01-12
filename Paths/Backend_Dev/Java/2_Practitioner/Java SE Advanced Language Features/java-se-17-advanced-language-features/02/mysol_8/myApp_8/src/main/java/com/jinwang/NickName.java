package com.jinwang;

import static com.jinwang.Validation.checkThat;

public record NickName(String value) {

    public NickName {
        checkThat(value != null && !value.isBlank(), "value must not be null or blank");
    }

    @Override
    public String toString() {
        return value;
    }
}
