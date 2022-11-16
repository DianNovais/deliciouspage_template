import "./Home.css";
import { useEffect, useState } from "react";

const Home = () => {
  const [data, setData] = useState([]);
  const [qtd, setQtd] = useState(0);

  useEffect(() => {
    fetch("/static/food.json")
      .then((response) => response.json())
      .then(setData);
  }, []);

  const whatsappMsg = (title, quant) => {
    const textCript = encodeURI(`olá, gostaria de pedir ${quant} ${title}`);
    const message = `https://api.whatsapp.com/send?phone=5577991115142&text=${textCript}`;

    window.open(message);
  };
  return (
    <main>
      <div className="food_container" id="cardapio">
        <h2>Comidas Deliciosas</h2>
        <p>Experimente os melhores lanches e pizzas da região</p>
        <div className="food_content">
          {data === undefined && (
            <div>Carregando ...</div>
          )}
          {data.map((item) => (
            <div key={item.id} className="food_item">
              <img src={item.img} alt={item.title}></img>
              <h3>{item.title}</h3>
              <div className="pedido">
                <button
                  className="btn_buy"
                  onClick={() => whatsappMsg(item.title, qtd)}
                >
                  Pedir
                </button>
                <input
                  type="number"
                  onChange={(e) => setQtd(e.target.value)}
                  defaultValue="0"
                />
              </div>
              {qtd < 1 && <p>Coloque a quantidade</p>}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Home;
