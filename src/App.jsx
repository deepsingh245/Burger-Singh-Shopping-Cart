import "./App.css";
import Items from './components/items'
import {useEffect, useState } from "react";
import Card from "./components/Card/card";
import Header from "./components/Header/header";
import Cart from "./components/Cart/cart";

function App() {
  const [snacks, setSnacks] = useState([]);
  const [cartItems, setcartItems] = useState([]);
  const [FilteredItems, setFilteredItems] = useState([]);
  const [SearchValue, setSearchValue] = useState("");
  const [ActiveResearch, setActiveResearch] = useState(false);

  function addToCart(product) {
    setcartItems([...cartItems, product]);
  }

  function deleteCartItem(product) {
    setcartItems(cartItems.filter((item) => item !== product));
  }

  function deleteAllItems() {
    setcartItems([]);
  }

  function setInputValueToEmpty() {
    setActiveResearch(false);
    setSearchValue("");
  }

  useEffect(() => {
    setSnacks(Items);
    setFilteredItems(Items);
  }, []);

 
  return (
    <div className="App">
      <Header
        snacks={snacks}
        setFilteredItems={setFilteredItems}
        setSearchValue={setSearchValue}
        SearchValue={SearchValue}
        setActiveResearch={setActiveResearch}
      />

      
      <main>
        {SearchValue.length !== 0 ? (
          <>
            <h2 className="h2">
              Result:<p className="p">{SearchValue}</p>
            </h2>
            <div className=" containerGeral">
              <Card
                addToCart={addToCart}
                FilteredItems={FilteredItems}
                snacks={snacks}
                ActiveResearch={ActiveResearch}
                SearchValue={SearchValue}
                setInputValueToEmpty={setInputValueToEmpty}
              />
              <Cart
                deleteCartItem={deleteCartItem}
                cartItems={cartItems}
                deleteAllItems={deleteAllItems}
              />
            </div>
          </>
        ) : (
          <div className=" containerGeral">
            <Card
              addToCart={addToCart}
              FilteredItems={FilteredItems}
              snacks={snacks}
              ActiveResearch={ActiveResearch}
              SearchValue={SearchValue}
              setInputValueToEmpty={setInputValueToEmpty}
            />
            <Cart
              deleteCartItem={deleteCartItem}
              cartItems={cartItems}
              deleteAllItems={deleteAllItems}
            />
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
