package com.jinwang;

import java.util.regex.Pattern;

import static com.jinwang.Validation.checkThat;

public record Customer1(long id, String firstName, String familyName, String nickName, String email) {

    private static final Pattern EMAIL_PATTERN = Pattern.compile(".+@.+\\..+");

    public Customer1 {
        checkThat(firstName != null && !firstName.isBlank(), "firstName must not be null or blank");
        checkThat(familyName != null && !familyName.isBlank(), "familyName must not be null or blank");
        checkThat(nickName != null && !nickName.isBlank(), "nickName must not be null or blank");
        checkThat(email != null && !email.isBlank(), "email must not be null or blank");
        checkThat(EMAIL_PATTERN.matcher(email).matches(), "not a valid email address: " + email);
    }
}
