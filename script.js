let s = prompt("количество напитков");
function order(drink,s) { 
    for (let i=0; i<s;i++){
    let str = "Ваш заказ: ";
    let m = "Сумма"
    switch (drink) {
      case "эспрессо":
        str += "эспрессо" ;
        m += 20 ;
        break;
      case "капучино":
        str += "капучино";
        m+=25;
        return m ;
        break;
      default:
        break;
    }
    return str+m;
  }
}

  n = prompt("введите ваш заказ")
  const myOrder = order(n,s);
document.write(myOrder);