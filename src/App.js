import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import CardList from "./components/CardList";
import { useData } from "./hooks/useData";

function App() {
  const {products} = useData();
  return (
    <div className="App">
      <Header />
      {products ? (<CardList products={products} />) : "Is loading"}
    </div>
  );
}

export default App;
