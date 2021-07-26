console.log('hello');

// $(document).ready(() => {});

$(() => {

  const createProduct = (product) => {
    const $product = $(`
      <div class="product">
        <h2>Product Name: ${product.product_name}</h2>
        <h3>Price: $${product.price}</h3>
      </div>
    `);

    const $form = $(`
      <form>
        <label for="product-name">Product Name:</label>
        <input name="productName" id="product-name" value="${product.product_name}" />
        <br/>

        <label for="price">Price:</label>
        <input name="price" id="price" value="${product.price}" />
        <br/>

        <button type="submit">Update!</button>
      </form>
    `);

    $form.submit((event) => {
      event.preventDefault();
      
      const data = $form.serialize();

      $.post(`/api/products/${product.id}`, data)
        .then(() => {
          fetchProducts();
        });
    });

    const $deleteButton = $('<button>Delete!!</button>');
    $deleteButton.click(() => {
      $.post(`/api/products/${product.id}/delete`)
        .then(() => {
          fetchProducts();
        });
    });

    $product.append($form, $deleteButton);

    return $product;
  };

  const renderProducts = (products) => {
    const $productContainer = $('#products');
    $productContainer.empty();

    for (const product of products) {
      const $product = createProduct(product);
      $productContainer.append($product);
    }
  };

  const fetchProducts = () => {
    $.get('/api/products')
      .then((products) => {
        console.log(products);
        renderProducts(products);
      });
  };

  const $form = $('#new-product')
  $form.submit((event) => {
    event.preventDefault();
    
    const data = $form.serialize();

    $.post('/api/products', data)
      .then(() => {
        console.log('all done!');
        fetchProducts();
      });
  });

  fetchProducts();

});
