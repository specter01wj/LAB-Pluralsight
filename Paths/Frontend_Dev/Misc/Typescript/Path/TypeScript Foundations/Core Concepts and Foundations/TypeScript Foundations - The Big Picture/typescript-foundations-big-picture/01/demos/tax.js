function calculateTax(amount, shouldApplyTax) {
  const taxRate = 0.06;
  if (shouldApplyTax) {
    return amount + amount * taxRate;
  }
  return amount;
}
console.log(calculateTax(3, true));