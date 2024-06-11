const priceElement = document.getElementById("product");
const numberElement = document.getElementById("number");
let purchases = [];

const products = [
  { id: 1, name: "Mezcla original 200g", price: 500 },
  { id: 2, name: "Mezcla original 500g", price: 900 },
  { id: 3, name: "Mezcla especial 200g", price: 700 },
  { id: 4, name: "Mezcla especial 500g", price: 1200 }
];

function add() {
  const productId = parseInt(priceElement.value);
  const number = parseInt(numberElement.value);

  if (isNaN(number) || number <= 0) {
    window.alert("Por favor, seleccione una cantidad válida.");
    return;
  }

  const product = products.find(p => p.id === productId);
  
  if (product) {
    let purchase = {
      name: product.name,
      price: product.price,
      number: number
    };
    purchases.push(purchase);
    window.alert(`Producto añadido:\nNombre: ${purchase.name}\nPrecio: ¥${purchase.price}\nCantidad: ${purchase.number}`);
  }
}

function calc() {
  let sum = 0;
  let purchaseDetails = '';
  for(let index = 0; index < purchases.length; index++) {
    let purchase = purchases[index];
    let subtotal = purchase.price * purchase.number;
    sum += subtotal;
    purchaseDetails += `${purchase.name} - ${purchase.number} unidades: ¥ ${subtotal}\n`;
  }
  
  let shippingCost = 0;
  if (sum <= 2000) {
    shippingCost = 500;
  } else if (sum < 3000) {
    shippingCost = 250;
  }
  
  let total = sum + shippingCost;
  
  window.alert(`Detalles de la compra:\n${purchaseDetails}\nSubtotal: ¥${sum}\nGastos de envío: ¥${shippingCost}\nTotal: ¥${total}`);
  
  purchases = [];
  priceElement.value = "0";
  numberElement.value = "";
}
