import React from "react";
import Option from "./Option";
const Currency = (props) => {
  const setCurrencyType = (e) => {
    props.type === "From"
      ? props.change_fromCurrency(e.target.value)
      : props.change_toCurrency(e.target.value);
  };
  const setfromValue = (e) => {
    if (props.type === "From") {
      props.changefromValue(e.target.value);
    }
  };
  return (
    <div className="w-full p-4 my-4 bg-white rounded-md flex items-center justify-between">
      <div>
        <p className="opacity-60 font-medium">{props.type}</p>
        <input
          onChange={setfromValue}
          className="mt-4 outline-none"
          type="number"
          aria-label="currency-Value"
          value={props.type === "From" ? props.fromValue : props.toValue}
          readOnly={props.type==='To'}
        />
      </div>
      <div>
        <p className="opacity-60 font-medium">Currency Type</p>
        <select
          onChange={setCurrencyType}
          className="currency-type mt-4"
          name="currencyType"
          aria-label="currencytype"
          value={
            props.fromCurrency != undefined
              ? props.fromCurrency
              : props.toCurrency
          }
        >
          {Object.entries(props.currencyData).map(([key, value], index) => (
            <Option key={index} value={key} />
          ))}
        </select>
      </div>
    </div>
  );
};

export default Currency;
