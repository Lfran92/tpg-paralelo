import { getGamingProducts } from './mock.js';

document.addEventListener('DOMContentLoaded', () => {
    const products = getGamingProducts();
    const productList = document.getElementById('product-list');
    const categorySelect = document.getElementById('category-select');

    const displayProducts = (productsToDisplay) => {
        productList.innerHTML = '';
        productsToDisplay.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'col-md-4 mb-4';
            productCard.innerHTML = `
                <div class="card h-100">
                    <img src="./img1/${product.imagen}" class="card-img-top" alt="${product.nombre}">
                    <div class="card-body">
                        <h5 class="card-title">${product.nombre}</h5>
                        <p class="card-text">${product.descripcion}</p>
                        <p class="card-text"><strong>Precio:</strong> $${product.precio}</p>
                        <p class="card-text"><strong>Descuento:</strong> ${product.descuento}%</p>
                        <p class="card-text"><strong>Marca:</strong> ${product.marca}</p>
                        <p class="card-text"><strong>Modelo:</strong> ${product.modelo}</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">Stock: ${product.stock}</small>
                    </div>
                </div>
            `;
            productList.appendChild(productCard);
        });
    };

    // Muestra todos los productos inicialmente
    displayProducts(products);

    categorySelect.addEventListener('change', () => {
        const selectedCategory = categorySelect.value;
        if (selectedCategory === 'all') {
            displayProducts(products);
        } else {
            const filteredProducts = products.filter(product => product.categoriaId === parseInt(selectedCategory));
            displayProducts(filteredProducts);
        }
    });
});
