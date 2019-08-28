import React from "react";

const prices = [
  { id: 1, label: "Any price", value: "" },
  { id: 2, label: "$", value: "1" },
  { id: 3, label: "$$", value: "2" },
  { id: 4, label: "$$$", value: "3" },
  { id: 5, label: "$$$$", value: "4" }
];

const Prices = ({ price, updatePrice }) => {
  return (
    <div>
      {prices.map(priceData => {
        return (
          <button
            key={priceData.id}
            disabled={price === priceData.value}
            onClick={() => updatePrice(priceData.value)}
          >
            {priceData.label}
          </button>
        );
      })}
    </div>
  );
};

export default Prices;
