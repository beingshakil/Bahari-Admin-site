import "./AddProduct.css";
import upload_area from "../../assets/upload_area.svg";
import { useState } from "react";

const AddProduct = () => {

  const [image, setImage] = useState(false);
  const [productDetails, setproductDetails] = useState({
    name: "",
    image: "",
    category: "men",
    new_price: "",
    old_price: ""
  })

  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  }

  const changeHandler = (e) => {
    setproductDetails({...productDetails, [e.target.name]: e.target.value})
  }

  const Add_product = async () =>{
    console.log(productDetails)
  }

  return (
    <div className="add-product">
      <div className="add-product-item">
        <p>Product Title</p>
        <input value={productDetails.name} onChange={changeHandler} type="text" name="name" placeholder="Type here" />
      </div>

      <div className="add-product-price">
        <div className="add-product-item">
          <p>Price</p>
          <input value={productDetails.old_price} onChange={changeHandler} type="text" name="old_price" placeholder="Type Here" />
        </div>

        <div className="add-product-item">
          <p>Offer Price</p>
          <input value={productDetails.new_price} onChange={changeHandler} type="text" name="new_price" placeholder="Type Here" />
        </div>
      </div>

      <div className="add-product-item">
        <p>Product Category</p>
        <select value={productDetails.category} onChange={changeHandler} name="category" className="add-product-selector">
          <option value="men">Men</option>
          <option value="women">Women</option>
          <option value="kid">Kid</option>
        </select>
      </div>

      <div className="add-product-item">
        <label htmlFor="file-input">
          <img src={image?URL.createObjectURL(image):upload_area} className="add-product-thumbnail-img" alt="" />
        </label>
        <input onChange={imageHandler} type="file" name="image" id="file-input" hidden />
      </div>
      <button onClick={()=>{Add_product()}} className="add-product-btn">ADD</button>
    </div>
  );
};

export default AddProduct;
