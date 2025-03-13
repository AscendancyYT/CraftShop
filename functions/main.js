let selectedProduct = '';
let selectedPrice = 0;

function makeid(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
    }
    return result;
}

function generateOrderId() {
    return `ORD-${makeid(3)}-${makeid(3)}-ER`;
}

function showForm(product, price) {
    selectedProduct = product;
    selectedPrice = price;
    document.getElementById('order-form').style.display = 'block';
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
}

function saveOrderToLocalStorage(order) {
    const orders = JSON.parse(localStorage.getItem('craftShopOrders') || '[]');
    const orderWithoutStatus = { ...order, price: selectedPrice };
    delete orderWithoutStatus.status;
    orders.push(orderWithoutStatus); // Newest order added to the end
    localStorage.setItem('craftShopOrders', JSON.stringify(orders));
}

function fetchOrderStatus(orderId) {
    return fetch(`https://67c8964c0acf98d07087272b.mockapi.io/CraftShopOrders?orderID=${orderId}`)
        .then(response => response.json())
        .then(data => data.length > 0 ? data[0].status : 'Pending')
        .catch(() => 'Pending');
}

async function renderOrders() {
    const ordersContainer = document.getElementById('orders-container');
    const localOrders = JSON.parse(localStorage.getItem('craftShopOrders') || '[]');
    ordersContainer.innerHTML = '';

    // Reverse the array to show newest orders at the top
    const reversedOrders = [...localOrders].reverse();

    for (const order of reversedOrders) {
        const status = await fetchOrderStatus(order.orderID);
        const orderElement = document.createElement('div');
        orderElement.classList.add('order');
        
        if (status === 'Finished') {
            orderElement.classList.add('finished');
        } else if (status === 'Something Went Wrong') {
            orderElement.classList.add('something-went-wrong');
        }

        orderElement.innerHTML = `
            <h1 class="productName">${order.productName}</h1>
            <h1 class="productId">${order.orderID}</h1>
            <h1 class="productStatus ${status.toLowerCase().replace(' ', '-')}">${status}</h1>
        `;
        ordersContainer.appendChild(orderElement);
    }
}

document.getElementById('submit-order').addEventListener('click', () => {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const telegram = document.getElementById('telegram').value;

    if (!name || !email || !telegram) {
        alert('Please fill in all fields.');
        return;
    }

    const orderData = {
        name: name,
        productName: selectedProduct,
        orderID: generateOrderId(),
        status: 'Pending',
        userEmail: email,
        userTelegram: telegram,
        date: new Date().toISOString()
    };

    fetch('https://67c8964c0acf98d07087272b.mockapi.io/CraftShopOrders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderData)
    })
    .then(response => {
        if (response.ok) {
            alert('Order submitted successfully!');
            saveOrderToLocalStorage(orderData);
            renderOrders();
            document.getElementById('order-form').style.display = 'none';
            document.getElementById('name').value = '';
            document.getElementById('email').value = '';
            document.getElementById('telegram').value = '';
        } else {
            alert('Failed to submit order. Please try again.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
    });
});

window.addEventListener('load', renderOrders);