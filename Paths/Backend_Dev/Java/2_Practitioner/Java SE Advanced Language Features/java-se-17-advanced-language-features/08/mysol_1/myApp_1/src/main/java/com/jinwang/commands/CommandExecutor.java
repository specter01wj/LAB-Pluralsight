package com.jinwang.commands;

import com.jinwang.SessionState;
import com.jinwang.UserInput;

public interface CommandExecutor {
    void execute(SessionState sessionState, UserInput userInput);
}
