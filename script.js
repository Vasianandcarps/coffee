let drink = prompt("заказ");
let drinks = ["эспрессо", "капучино"];
let str = "Ваш заказ: ";
let sum = 0;
function order(...drinks) {
  for (let i = 0; i < drinks.length; i++) {
    switch (drinks[i]) {
      case "эспрессо":
        price = 20;
        break;
      case "капучино":
        price = 24;
        break;
      default:
        break;
    }
    sum += price;
    str += drinks[i] + " " + price + "<br>";
  }

  str += "Сумма:" + sum;
  return str;
}
document.write(order(drink, drink));
