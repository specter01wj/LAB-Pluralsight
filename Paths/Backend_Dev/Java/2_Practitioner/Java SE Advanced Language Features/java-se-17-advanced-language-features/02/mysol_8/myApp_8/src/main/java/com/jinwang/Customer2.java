package com.jinwang;

import static com.jinwang.Validation.checkThat;

public record Customer2(long id, FullName fullName, NickName nickName, EmailAddress email) {

    public Customer2 {
        checkThat(fullName != null, "fullName must not be null");
        checkThat(nickName != null, "nickName must not be null");
        checkThat(email != null, "email must not be null");
    }
}
