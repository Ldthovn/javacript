function getTicketFee(person) {
  var baseFee = 10000;
  if (person.age < 15) {
    return baseFee * 0.8;
  } else if (person.age > 60) {
    return baseFee * 0.9;
  } else {
    return baseFee;
  }
}

var person = {
  age: 61
};

var fee = getTicketFee(person);
console.log("fee :", fee);
