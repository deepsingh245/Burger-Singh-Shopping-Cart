import React from "react";
import { Headerr } from "./styleHeader";

function Header({ lanches, setFilteredItems, setSearchValue }) {
  function inputData(event) {
    setSearchValue(event.target.value);
    setFilteredItems(
      lanches.filter(
        (item) =>
          item.name.toLowerCase().includes(event.target.value.toLowerCase()) ||
          item.category.toLowerCase().includes(event.target.value.toLowerCase())
      )
    );
  }

  function doNotLoadThePage(event) {
    event.preventDefault();
  }
  return (
    <Headerr>
      <>
        <img src="assets/logo.png" alt="Logo Burger Singh" />
        <h1>Burger Singh</h1>
      </>

      <form>
        <input type="text" placeholder="Search Items" onChange={inputData} />
        <button onClick={(e) => doNotLoadThePage(e)}>Search</button>
      </form>
    </Headerr>
  );
}

export default Header;
