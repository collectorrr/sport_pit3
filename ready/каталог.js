const products = [
    { id: 1, img: 'i2.png', name: 'product1'},
    { id: 2, img: 'bcaa.png', name: 'Product2'},
    { id: 3, img: 'i2.png', name: 'Product3'},
    { id: 4, img: 'bcaa.png', name: 'Product4'},
    { id: 5, img: 'i2.png', name: 'Product5'},
    { id: 6, img: 'bcaa.png', name: 'Product6' },
    { id: 7, img: 'bcaa.png', name: 'Product7' },
    { id: 8, img: 'bcaa.png', name: 'Product8'},
    { id: 9, img: 'i2.png', name: 'Product9' },
    { id: 10, img: 'bcaa.png', name: 'Product10'},
    { id: 11, img: 'bcaa.png', name: 'Product11'},
    { id: 12, img: 'i2.png', name: 'Product12'},
    { id: 13, img: 'bcaa.png', name: 'Product13'},
    { id: 14, img: 'bcaa.png', name: 'Product14'},
    { id: 15, img: 'i2.png', name: 'Product15'},
    { id: 16, img: 'bcaa.png', name: 'Product16'},
    // Добавьте остальные товары по аналогии
];

// Функция для отображения товаров
function renderProducts() {
    const productGrid = document.getElementById('productGrid');
    productGrid.innerHTML = '';

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';

        const img = document.createElement('img');
        img.src = product.img

        const addBtn = document.createElement('button');
        addBtn.className = 'add-btn';
        addBtn.textContent = 'ДОБАВИТЬ В 🛒';

        productCard.appendChild(img);
        productCard.appendChild(addBtn);
        productGrid.appendChild(productCard);
    });
}

// Функция поиска товаров (пример)
function searchProducts() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchInput)
    );
    // Перерисовываем сетку с отфильтрованными товарами
    renderFilteredProducts(filteredProducts);
}

// Функция для отображения отфильтрованных товаров
function renderFilteredProducts(filteredProducts) {
    const productGrid = document.getElementById('productGrid');
    productGrid.innerHTML = '';

    filteredProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';

        const img = document.createElement('img');
        img.src = product.img;
        img.alt = product.name;

        const addBtn = document.createElement('button');
        addBtn.className = 'add-btn';
        addBtn.textContent = 'ДОБАВИТЬ В 🛒';

        productCard.appendChild(img);
        productCard.appendChild(addBtn);
        productGrid.appendChild(productCard);
    });
}

// Инициализация
document.addEventListener('DOMContentLoaded', renderProducts);