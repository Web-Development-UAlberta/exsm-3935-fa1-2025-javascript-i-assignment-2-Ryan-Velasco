async function main() {
  //Collect user inputs, assuming user is not trying to break code:
  let totalCost = Number(await input("Total cost of goods: "));
  let cashPayment = Number(await input("Cash payment from the customer: "));
  let discountCode = Number(await input("Discount code (0-5): "));
  //Determine discount with switch statement:
  let discountRate = 0;
  switch (discountCode) {
    case 0:
      discountRate = 0.00;
      break;
    case 1:
      discountRate = 0.10;
      break;
    case 2:
      discountRate = 0.15;
      break;
    case 3:
      discountRate = 0.25;
      break;
    case 4:
      discountRate = 0.35;
      break;
    case 5:
      discountRate = 0.40;
      break;
    default: 
      output("Invalid discount code. No discount applied.");
      discountRate = 0.00;
  }
  //Calculate change owed to two decimal points:
  let discountedTotal = totalCost * (1 - discountRate);
  let changeOwed = cashPayment - discountedTotal;
  if (changeOwed < 0) {
    output("Insufficient Payment!");
  }
  else {
    output("$" + changeOwed.toFixed(2));
  }
}