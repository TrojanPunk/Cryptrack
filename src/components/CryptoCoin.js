import React, { useState } from "react";
import { Link } from "react-router-dom";
import { DownTrend, UpTrend } from "../assets/svg";

function currencyFormat(num) {
  return "$" + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}

const CryptoCoin = ({ coin, counter }) => {
  const [aboveLimit, setAboveLimit] = useState(false);
  const [belowLimit, setBelowLimit] = useState(false);

  const handleLimitChange = (e) => {
    const userLimit = parseFloat(e.target.value);
    setAboveLimit(userLimit < coin.price_change_percentage_24h);
    setBelowLimit(userLimit > coin.price_change_percentage_24h);
  };

  const backgroundColor = counter % 2 === 1 ? "rgba(33, 37, 52, 1)" : "rgba(27, 30, 44, 1)";
  const borderColor = "rgba(128, 128, 128, 0.3)";
  const hoverBackgroundColor = "rgba(128, 128, 128, 0.8)";

  return (
    <Link to={`/coin/${coin.id}`}>
      <div
        className="grid grid-cols-3 sm:grid-cols-5 font-light p-2 rounded border-gray-200 border-b custom-hover-bg"
        style={{
          borderColor,
          backgroundColor,
        }}
      >
        <div className="flex items-center gap-1 w-full">
          <img className="w-6" src={coin.image} alt={coin.name} />
          <p>{coin.name}</p>
          <span className="text-xs">({coin.symbol})</span>
        </div>
        <span className="w-full text-center">{currencyFormat(coin.current_price)}</span>
        <span className={`flex gap-1 ${coin.price_change_percentage_24h < 0 ? "text-red-400" : "text-green-400"}`}>
          {coin.price_change_percentage_24h < 0 ? <DownTrend /> : <UpTrend />}
          {coin.price_change_percentage_24h}
        </span>
        <div className="hidden sm:block">
          <p className="font-semibold">Market Cap</p>
          <span>{currencyFormat(coin.market_cap)}</span>
        </div>
        <div className="flex items-center gap-2">
          <input
            type="number"
            step="0.1"
            onChange={handleLimitChange}
            className="w-20 p-1 text-center border rounded focus:outline-none"
            placeholder="Limit"
            style={{
              backgroundColor: 'rgba(45, 50, 67, 1)',
              border: '1px solid rgba(128, 128, 128, 0.3)',
              color: 'white'
            }}
          />
          {aboveLimit && <span className="text-green-400">Above Limit</span>}
          {belowLimit && <span className="text-red-400">Below Limit</span>}
        </div>
      </div>
      <style>
        {`
          .custom-hover-bg:hover {
            background-color: ${hoverBackgroundColor};
          }
        `}
      </style>
    </Link>
  );
};

export default CryptoCoin;
