package com.jinwang;

import java.math.BigDecimal;
import java.time.LocalDateTime;

public record Purchase(long customerId, BigDecimal amount, LocalDateTime dateTime) implements Transaction {
}
