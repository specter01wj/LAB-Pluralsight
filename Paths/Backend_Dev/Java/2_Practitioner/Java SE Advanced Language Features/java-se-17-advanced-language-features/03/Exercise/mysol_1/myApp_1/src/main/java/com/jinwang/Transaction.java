package com.jinwang;

public sealed interface Transaction permits Purchase, Refund {
}
