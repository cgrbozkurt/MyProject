import { useState } from "react";
import "./ProductForm.css";

const ProductForm = () => {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const titleChangeHandler = (event) => {
    setProductName(event.target.value);
  };

  const priceChangeHandler = (event) => {
    setProductPrice(event.target.value);
  };

  const imageChangeHandler = (event) => {
    setImageUrl(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    
    const newProductData = {
      productName,
      productPrice,
      imageUrl,
    };

    console.log(newProductData);
  };

  return (
    <form className="product-form" onSubmit={submitHandler}>
      <div className="product-form-input">
        <label>Ürün Adı</label>
        <input
          type="text"
          placeholder="Ürün Adı Giriniz..."
          onChange={titleChangeHandler}
        />
      </div>
      <div className="product-form-input">
        <label>Ürün Fiyatı</label>
        <input
          type="number"
          placeholder="Ürün Fiyatı Giriniz..."
          onChange={priceChangeHandler}
        />
      </div>
      <div className="product-form-input">
        <label>Ürün Görseli</label>
        <input
          type="text"
          placeholder="Ürün Görseli Giriniz..."
          onChange={imageChangeHandler}
        />
      </div>
      <button className="product-form-button">Ürün Ekle</button>
    </form>
  );
};

export default ProductForm;
