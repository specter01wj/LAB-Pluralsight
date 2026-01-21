package com.jinwang;

import java.math.BigDecimal;
import java.time.LocalDateTime;

public record Refund(long customerId, BigDecimal amount, LocalDateTime dateTime) implements Transaction {
}

