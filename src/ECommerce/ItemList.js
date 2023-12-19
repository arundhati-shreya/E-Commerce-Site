import React from "react";
import './Form.css';

function ItemList(props) {
  return (
    <>
      <h1>Products</h1>
      <ul className="product-list">
        {props.categories.map(category => (
          <div key={category}>
            <h2>{category} Items</h2>
            {props.list
              .filter(product => product.Cat.toLowerCase() === category.toLowerCase())
              .map((product, index) => (
                <li key={index}>
                  Id: {product.ID},
                  Price: {product.Price},
                  Name: {product.Name},
                  Category: {product.Cat}
                  <button onClick={() => props.DeleteHandler(index)}>Delete</button>
                </li>
              ))}
          </div>
        ))}
      </ul>
    </>
  );
}

export default ItemList;
