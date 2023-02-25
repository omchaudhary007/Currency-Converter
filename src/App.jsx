import React from "react";
import background from "./assets/bg.webp";
import CurrencyContainer from "./components/CurrencyContainer";
import './App.css'
const App = () => {
  return (
    <div
      className="w-screen h-screen bg-no-repeat bg-cover bg-center flex flex-col items-center whitespace-nowrap"
      style={{ backgroundImage: `url(${background})` }}
    >
      <h1 className="my-10 text-3xl font-bold text-orange-600">
        Currency <span className="text-white">Converter</span>
      </h1>
      <CurrencyContainer />
    </div>
  );
};

export default App;
