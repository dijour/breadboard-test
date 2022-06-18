import React from "react";
import logo from "./logo.svg";
import "./App.css";
import OrderForm from "./components/form";
import Card from "./components/card";

function App() {
  return (
    <div className="App">
      <Card>
        <OrderForm />
      </Card>
    </div>
  );
}

export default App;
