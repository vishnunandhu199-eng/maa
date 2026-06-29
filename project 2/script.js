const addButtons = document.querySelectorAll('.add-btn');
const orderList = document.getElementById('orderList');
const totalPrice = document.getElementById('totalPrice');
const checkoutBtn = document.getElementById('checkoutBtn');

let total = 0;
const items = [];

addButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const card = button.closest('.card');
    const itemName = card.querySelector('h3').textContent;
    const priceText = card.querySelector('span').textContent;
    const price = Number(priceText.replace(/[^0-9]/g, ''));

    items.push({ name: itemName, price });
    total += price;

    renderOrder();
  });
});

function renderOrder() {
  orderList.innerHTML = '';

  items.forEach((item, index) => {
    const li = document.createElement('li');
    li.textContent = `${index + 1}. ${item.name} - ₹${item.price}`;
    orderList.appendChild(li);
  });

  totalPrice.textContent = total;
}

if (checkoutBtn) {
  checkoutBtn.addEventListener('click', () => {
    alert('Order placed successfully!');
  });
}
