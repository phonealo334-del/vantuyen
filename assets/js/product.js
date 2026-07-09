const product = {
  products: [
    { id: 1, name: 'Sản Phẩm A', price: '100.000đ', stock: 50 },
    { id: 2, name: 'Sản Phẩm B', price: '150.000đ', stock: 30 },
    { id: 3, name: 'Sản Phẩm C', price: '200.000đ', stock: 20 }
  ],
  
  render(container) {
    let html = '<div class="product-container"><div class="product-grid">';
    
    this.products.forEach(prod => {
      html += `
        <div class="product-card">
          <div class="product-image">📦</div>
          <div class="product-info">
            <div class="product-name">${prod.name}</div>
            <div class="product-price">${prod.price}</div>
            <div>Tồn kho: ${prod.stock}</div>
          </div>
        </div>
      `;
    });
    
    html += '</div></div>';
    container.innerHTML = html;
  }
};
