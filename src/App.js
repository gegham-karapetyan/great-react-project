import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Description from "./components/description";
import Quality from "./components/quality";
import AnotherComponent from "./components/anotherComponent";
import Product from "./components/Product";
function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Description library="React" />
      <Quality grade={props.grade} />
      <AnotherComponent class="another" />
      <Product
        name="apple"
        price="600$"
        description="freshly bitten apple from Cupertino"
      />
    </div>
  );
}

export default App;
