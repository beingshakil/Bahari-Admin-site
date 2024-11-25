import "./ListProduct.css";
import cross_icon from "../../assets/cross_icon.png";
import { useState } from "react";
import all_product from "../../assets/all_product";

const ListProduct = () => {
  const [allproducts, setAllProducts] = useState(all_product); 

  const removeProduct = (id) => {
    // Remove the product from the list by filtering out the product with the matching id
    const updatedProducts = allproducts.filter((product) => product.id !== id);
    setAllProducts(updatedProducts); // Update the state with the new list
  };

  const limitedProducts = allproducts.slice(0, 4); 

  return (
    <div className="list-product">
      <h1>All Products List</h1>
      <div className="list-product-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>

      <div className="list-product-all-products">
        <hr />
        {limitedProducts.length === 0 ? (
          // Display this message if no products are available
          <p className="not-available-product">Sorry, there are no products available.</p>
        ) : (
          limitedProducts.map((product) => (
            <div
              key={product.id}
              className="list-product-format-main list-product-format"
            >
              <img
                src={product.image}
                alt={`${product.name} image`}
                className="list-product-product-icon"
              />
              <p>{product.name}</p>
              <p>{product.old_price}</p>
              <p>{product.new_price}</p>
              <p>{product.category}</p>
              <img
                className="list-product-remove-icon"
                src={cross_icon}
                alt="Remove icon"
                onClick={() => removeProduct(product.id)} 
              />
            </div>
          ))
        )}
        <hr />
      </div>
    </div>
  );
};

export default ListProduct;
