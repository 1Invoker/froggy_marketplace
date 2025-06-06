import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Card from "./components/Card";

function App() {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      const fetchedProduct = {
        name: "LION'S MANE 120 caps",
        price: "3 500р.",
        image: "https://optim.tildacdn.com/stor6563-6662-4438-b362-333434393337/-/format/webp/66043000.jpg.webp",
        description: "Дар природы, содержащий в себе множество биологически ценных веществ, уникальные сложные молекулы: эринацины, герицинон, тритерпены, лектин, стеролы, моноглицериды, ацетиленовые соединения, витамины, минералы, полисахариды и многие другие вещества.Ежовик это мощный природный ноотроп, который улучшает память и скорость усвоения информации, укрепляет нервную и иммунную системы, способствует снижению усталости и прокрастинации.",
      };

      setProduct(fetchedProduct);
    }, 1500);
  }, []);

  return (
    <div className="App">
      <Header />
      {product ? (<Card
        name={product.name}
        price={product.price}
        image={product.image}
        description={product.description}
      />) : "Is loading"}
    </div>
  );
}

export default App;
