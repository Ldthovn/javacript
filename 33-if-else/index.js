function countBills(bills) {
  var total = 0;
  for (var bill of bills) {
    if (!bill.fake) {
      total += bill.value;
    } else {
      console.log(bill);
    }
  }
  return total;
}

var bills = [
  { value: 13000 },
  { value: 12000 },
  { value: 10000, fake: true },
  { value: 11000 },
  { value: 14000 }
];

var total = countBills(bills);
console.log("total :", total);
