const order = {
  chaucer: 0,
  bridge: 0,
  gold: 0,
  mild: 0
};

const prices = {
  chaucer: 6.75,
  bridge: 7.20,
  gold: 7.20,
  mild: 8.00
}

function render() {
  document.querySelector(".chaucerCount").innerHTML = order.chaucer.toString();
  document.querySelector(".bridgeCount").innerHTML = order.bridge.toString();
  document.querySelector(".goldCount").innerHTML = order.gold.toString();
  document.querySelector(".mildCount").innerHTML = order.mild.toString();

  document.querySelector("#chaucer").value = order.chaucer;
  document.querySelector("#bridge").value = order.bridge;
  document.querySelector("#gold").value = order.gold;
  document.querySelector("#mild").value = order.mild;

  document.querySelector(".price-amt").innerHTML = (
    (order.chaucer * prices.chaucer) +
    (order.bridge * prices.bridge) +
    (order.gold * prices.gold) +
    (order.mild * prices.mild)
  ).toFixed(2);
}

function addBeer(beerName) {
  order[beerName] += 1;
  render();
}

function removeBeer(beerName) {
  order[beerName] = Math.max(0, order[beerName] - 1);
  render();
}

function checkForm(f) {
  if (order.chaucer + order.bridge + order.gold + order.mild === 0) {
    alert("You cannot submit an empty order!");
    return false;
  }


  const fd = new FormData(f);
  if (fd.get("pay_by") === null) {
    alert("Please select a payment option.");
    return false;
  }

  return true;
}

render();
