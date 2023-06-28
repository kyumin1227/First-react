import { useEffect, useState } from "react";

function Info() {
  return <span>{} ~ 구매 가능</span>;
}

function App() {
  const [loading, setLoading] = useState(true);
  const [inputMoney, setInputMoney] = useState(false);
  const [coins, setCoins] = useState([]);
  const [money, setMoney] = useState("");
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => setCoins(json));
    setLoading(false);
  }, []);
  const onChange = (event) => {
    console.log(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    console.log("okay");
    setInputMoney(true);
  };
  const onChangeMoney = (event) => {
    console.log(event.target.value);
    setMoney(event.target.value);
  };
  return (
    <div>
      <h1>The Coin! {coins.length !== 0 ? `(${coins.length})` : null}</h1>
      {}
      <br></br>
      {loading ? (
        <strong>Loading...</strong>
      ) : inputMoney ? (
        <h4>보유 자산: ${money}</h4>
      ) : (
        <form onSubmit={onSubmit}>
          <input
            onChange={onChangeMoney}
            value={money}
            type="number"
            placeholder="My money"
          ></input>
          <button>okay</button>
        </form>
      )}
      <select onChange={onChange}>
        <option value={0}>Select Coin!</option>
        {coins.map((coin) => (
          <option value={coin.id}>
            {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} 구매 가능 수량{" "}
            {money / coin.quotes.USD.price}
          </option>
        ))}
      </select>
    </div>
  );
}

export default App;
