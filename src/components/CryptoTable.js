import React from "react";
import useAxios from "../hooks/axiosRequest";
import CryptoCoin from "./CryptoCoin";
import Loader from "./Loader";

const CryptoTable = () => {
  const { response, loading } = useAxios('coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en');
  let counter = 0;

  if (loading) {
    return (
      <div className="wrapper-container mt-8">
        <Loader className="h-8 w-32" />
        <Loader className="h-8 w-full mt-2" />
        <Loader className="h-8 w-full mt-2" />
        <Loader className="h-8 w-full mt-2" />
        <Loader className="h-8 w-full mt-2" />
        <Loader className="h-8 w-full mt-2" />
        <Loader className="h-8 w-full mt-2" />
        <Loader className="h-8 w-full mt-2" />
      </div>
    );
  }

  return (
    <section className="mt-8">
      <h1 className="text-2xl mb-2" style={{ color: 'white' }}>Markets</h1>
      {response && response.map(coin => <CryptoCoin key={coin.id} coin={coin} counter={counter++} />)}
    </section>
  );
};

export default CryptoTable;
