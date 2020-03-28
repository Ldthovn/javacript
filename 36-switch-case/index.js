// switch ... case
//
// systax:
// switch (expression) {
//     case value1:
//         do something;
//         break;
//     case value2:
//         do something;
//         break;
//      ...
//     default:
//         do something;
//         break;
// }

// bronze, silver, gold, diamond
// discount:
// bronze: 2%
// silver: 5%
// gold: 8%
// diamond: 10%
var memberCard = {
  tier: "gold"
};

function getTotal(price, card) {
  var discountRate;

  switch (card.tier) {
    case "bronze":
      discountRate = 0.02;
      break;
    case "silver":
      discountRate = 0.05;
      break;
    case "gold":
      discountRate = 0.08;
      break;

    default:
      discountRate = 0.1;
      break;
  }

  //   if (card.tier === "bronze") {
  //     discountRate = 0.02;
  //   } else if (card.tier === "silver") {
  //     discountRate = 0.05;
  //   } else if (card.tier === "gold") {
  //     discountRate = 0.08;
  //   } else {
  //     discountRate = 0.1;
  //   }
  return price * (1 - discountRate);
}

var total = getTotal(50000, memberCard);
// console.log("total :", total);

var trafficLight = "red";

function goOnStopInVietNam(lightValue) {
  switch (lightValue) {
    case "green":
    case "orange":
      console.log("Go");
      break;
    default:
      console.log("Stop");
      break;
  }
}

goOnStopInVietNam(trafficLight);
