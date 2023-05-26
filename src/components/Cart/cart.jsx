import React from "react";
import {
  Aside,
  CartNameDiv,
  EmptyCartDiv,
  CartCardDiv,
  Sectionn,
} from "./styleCart";

function Cart({ deleteCartItem, cartItems, deleteAllItems }) {
  let total = cartItems.reduce(
    (initialValue, productValues) =>
      initialValue + productValues.price,
    0
  );
  return (
    <Aside>
      <CartNameDiv>
        <h3>Shopping Cart</h3>
      </CartNameDiv>
      <Sectionn>
        {cartItems.length === 0 ? (
          <EmptyCartDiv>
            <h3>Your bag is empty.</h3>
            <span>Add Items</span>
          </EmptyCartDiv>
        ) : (
          cartItems.map((item) => (
            <CartCardDiv>
              <div className="imgCart">
                <img src={item.img} alt="imagem do produto" />
              </div>
              <div>
                <h4>{item.name}</h4>
                <p>{item.category}</p>
              </div>
              <button
                className="RemoveCartCardButton"
                onClick={() => deleteCartItem(item)}
              >
                Remove
              </button>
            </CartCardDiv>
          ))
        )}
      </Sectionn>
      {cartItems.length !== 0 && (
        <>
          <div className="divTotal">
            <span>Total</span>
            <p>Rs. {total.toFixed(2)}</p>
          </div>
          <button onClick={() => deleteAllItems()}>Remove All</button>
        </>
      )}
    </Aside>
  );
}

export default Cart;
