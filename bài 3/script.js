document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('searchInput');
  const searchBtn = document.getElementById('searchBtn');
  const addProductBtn = document.getElementById('addProductBtn');
  const addProductForm = document.getElementById('addProductForm');
  const cancelBtn = document.getElementById('cancelBtn');
  const errorMsg = document.getElementById('errorMsg');
  const productList = document.getElementById('product-list');

  // --- TÌM KIẾM SẢN PHẨM ---
  searchBtn.addEventListener('click', () => {
    const keyword = searchInput.value.toLowerCase().trim();
    const products = document.querySelectorAll('.product-item');

    products.forEach(item => {
      const name = item.querySelector('.product-name').textContent.toLowerCase();
      item.style.display = name.includes(keyword) ? '' : 'none';
    });
  });

  // --- ẨN / HIỆN FORM THÊM SẢN PHẨM ---
  addProductBtn.addEventListener('click', () => {
    addProductForm.classList.toggle('hidden');
  });

  cancelBtn.addEventListener('click', () => {
    addProductForm.classList.add('hidden');
    addProductForm.reset();
    errorMsg.textContent = '';
  });

  // --- XỬ LÝ THÊM SẢN PHẨM ---
  addProductForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('newName').value.trim();
    const price = document.getElementById('newPrice').value.trim();
    const desc = document.getElementById('newDesc').value.trim();

    if (name === '' || price === '' || isNaN(price) || Number(price) <= 0) {
      errorMsg.textContent = 'Vui lòng nhập tên và giá hợp lệ!';
      return;
    }

    errorMsg.textContent = '';

    const newItem = document.createElement('article');
    newItem.className = 'product-item';
    newItem.innerHTML = `
      <h3 class="product-name">${name}</h3>
      <p class="product-desc">${desc}</p>
      <p class="product-price">Giá: ${price}₫</p>
    `;

    productList.prepend(newItem);
    addProductForm.reset();
    addProductForm.classList.add('hidden');
  });
});
