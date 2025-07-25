
    const products = [
      { name: "Shoes", price: 30, img: "./image/download.jpeg" },
      { name: "Watch", price: 80, img: "./image/download (1).jpeg" },
      { name: "T-shirt", price: 15, img: "./image/download (2).jpeg" },
      { name: "Bag", price: 25, img: "./image/download (3).jpeg" }
    ];
    let isLoggedIn = false;
    let cart = [];

    function renderProducts() {
      const box = document.getElementById('productsSection');
      box.innerHTML = '';
      products.forEach((p, i) => {
        box.innerHTML += `
          <div class="card">
            <img src="${p.img}" class="card-img-top">
            <div class="card-body text-center">
              <h5 class="card-title">${p.name}</h5>
              <p class="card-text">$${p.price}</p>
              <button class="btn btn-success" onclick="addToCart(${i})">Add to Cart</button>
            </div>
          </div>`;
      });
    }

    function showSection(section) {
      document.getElementById('productsSection').style.display = 'none';
      document.getElementById('loginBox').style.display = 'none';
      document.getElementById('registerBox').style.display = 'none';
      document.getElementById('cartPage').style.display = 'none';

      if (section === 'products') document.getElementById('productsSection').style.display = 'grid';
      if (section === 'login') document.getElementById('loginBox').style.display = 'block';
      if (section === 'register') document.getElementById('registerBox').style.display = 'block';
      if (section === 'cart') {
        if (!isLoggedIn) return alert("Please login first!");
        document.getElementById('cartPage').style.display = 'block';
        updateCartTable();
      }
    }

    function register() {
      const user = document.getElementById('regUser').value;
      const pass = document.getElementById('regPass').value;
      if (user && pass) {
        localStorage.setItem('user', user);
        localStorage.setItem('pass', pass);
        alert('Registered! Please login.');
        showSection('login');
      } else {
        alert('Please enter username and password');
      }
    }

    function login() {
      const user = document.getElementById('loginUser').value;
      const pass = document.getElementById('loginPass').value;
      if (user === localStorage.getItem('user') && pass === localStorage.getItem('pass')) {
        isLoggedIn = true;
        alert('Login successful!');
        showSection('products');
      } else {
        alert('Invalid credentials!');
      }
    }

    function addToCart(index) {
      if (!isLoggedIn) return alert('Please login first!');
      const existing = cart.find(item => item.name === products[index].name);
      if (existing) {
        existing.qty++;
      } else {
        cart.push({ ...products[index], qty: 1 });
      }
      updateCartCount();
    }

    function updateCartTable() {
      const tbody = document.getElementById('cartBody');
      tbody.innerHTML = '';
      let total = 0;
      cart.forEach((item, i) => {
        const itemTotal = item.qty * item.price;
        total += itemTotal;
        tbody.innerHTML += `
          <tr>
            <td>${item.name}</td>
            <td>
              <button class="qty-btn" onclick="changeQty(${i}, -1)">-</button>
              ${item.qty}
              <button class="qty-btn" onclick="changeQty(${i}, 1)">+</button>
            </td>
            <td>$${item.price}</td>
            <td>$${itemTotal}</td>
          </tr>`;
      });
      document.getElementById('grandTotal').innerText = `$${total}`;
    }

    function changeQty(index, delta) {
      cart[index].qty += delta;
      if (cart[index].qty <= 0) cart.splice(index, 1);
      updateCartTable();
      updateCartCount();
    }

    function updateCartCount() {
      const count = cart.reduce((sum, item) => sum + item.qty, 0);
      document.getElementById('cartCount').innerText = count;
    }

    renderProducts();
    showSection('products');
