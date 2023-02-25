import React, { useState } from "react";
import Currency from "./Currency";
import useFetch from "../hooks/useFetch";
const currencyAPI =
  "https://v6.exchangerate-api.com/v6/99727bede5d44c0bdd95eb86/latest/USD";
const CurrencyContainer = () => {
  const [fromCurrency, change_fromCurrency] = useState("USD");
  const [toCurrency, change_toCurrency] = useState("INR");
  const [toValue, changetoValue] = useState(1);
  const [fromValue, changefromValue] = useState(1);
  const [currencyData] = useFetch(currencyAPI);
  const swap = () => {
    let temp = fromCurrency;
    change_fromCurrency(toCurrency);
    change_toCurrency(temp);
  };

  const calculateVal = () => {
    let val = (fromValue/currencyData[fromCurrency])*currencyData[toCurrency];
    changetoValue(val);
  };
  return (
    <div
      className="min-w-fit w-1/2 p-5 relative rounded-lg"
      style={{ background: "rgba(255, 255, 255, 0.4)" }}
    >
      <Currency
        type={"From"}
        currencyData={currencyData}
        fromCurrency={fromCurrency}
        change_fromCurrency={change_fromCurrency}
        fromValue={fromValue}
        changefromValue={changefromValue}
      />
      <button
        onClick={swap}
        className="px-2 py-0.5 absolute top-[40%] left-[50%] -translate-x-1/2 rounded-md bg-blue-700 text-white border-2 border-white"
      >
        Swap
      </button>
      <Currency
        type={"To"}
        currencyData={currencyData}
        toCurrency={toCurrency}
        change_toCurrency={change_toCurrency}
        toValue={toValue}
      />
      <button
        onClick={calculateVal}
        className="w-full p-2 rounded-md bg-blue-700 text-white active:bg-blue-900"
      >
        Convert {fromCurrency} to {toCurrency}
      </button>
    </div>
  );
};

export default CurrencyContainer;
