import React, { useState, useEffect } from "react";
import './Form.css'
import ItemList from "./ItemList";

function Form() {
  const [id, setId] = useState('');
  const [price, setPrice] = useState('');
  const [productName, setProductName] = useState('');
  const [cat, setCat] = useState('Electronics'); 

  const [list, setList] = useState([]);

 
  useEffect(() => {
    const storedList = localStorage.getItem('productList');
    if (storedList) {
      setList(JSON.parse(storedList));
    }
  }, []);

  const IdHandler = (e) => {
    setId(e.target.value);
  }

  const PriceHandler = (e) => {
    setPrice(e.target.value);
  }

  const NameHandler = (e) => {
    setProductName(e.target.value);
  }

  const CatHandler = (e) => {
    setCat(e.target.value);
  }

  const AddHandler = (e) => {
    e.preventDefault();
    const obj = {
      ID: id,
      Price: price,
      Name: productName,
      Cat: cat
    }
    setList((prevList) => [...prevList, obj]);

    
    setId('');
    setPrice('');
    setProductName('');
    setCat('Electronics'); 
  }

  const DeleteHandler = (index) => {
    const updatedList = [...list];
    updatedList.splice(index, 1);
    setList(updatedList);
  };

 
  useEffect(() => {
    localStorage.setItem('productList', JSON.stringify(list));
  }, [list]);

  return (
    <>
      <div className="form-container">
        <label htmlFor="productId">Product ID:</label>
        <input value={id} onChange={IdHandler} type="text" placeholder="Product ID" />
        <label htmlFor="sellingPrice">Selling Price:</label>
        <input value={price} onChange={PriceHandler} type="text" placeholder="Selling Price" />
        <label htmlFor="productName">Product Name:</label>
        <input value={productName} onChange={NameHandler} type="text" placeholder="Product Name" />
        <label htmlFor="category">Category:</label>
        <select value={cat} onChange={CatHandler} placeholder="Category">
          <option value="Electronics">Electronics</option>
          <option value="Foods">Foods</option>
          <option value="Skincare">Skincare</option>
        </select>
        <button onClick={AddHandler}>Add Product</button>
      </div>
      <ItemList categories={['Electronics', 'Foods', 'Skincare']} list={list} DeleteHandler={DeleteHandler} />
    </>
  );
}

export default Form;
