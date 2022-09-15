import React, { useState, useEffect } from "react"
import Header from "./components/Header";
import Card from "./components/Card";
import Drawer from "./components/Drawer";

function App() {
  const [ isCartOpened, setIsCartOpened ] = useState(false)
  const [ items, setItems ] = useState([]);
  const [ cartItems, setCartItems ] = useState([]);


  useEffect(() => {
    const fetchItems = async () => { 
      const response = await fetch('https://63222e00fd698dfa29088340.mockapi.io/items');
      const json = await response.json();
      setItems(json)
    }

    fetchItems()
  }, [])

  const addItemToCart = (item) => {
    setCartItems(prevItems => [ ...prevItems, item ])
  }


  return (
    <div className="wrapper">

        {isCartOpened && <Drawer items={cartItems} onClickClose={() => setIsCartOpened(false)} />}

        <Header onClickCart={() => setIsCartOpened(true)} />

        <div className="content">

          <div className="title_and_input">
            <h1>Все кроссовки</h1>
            
            <div className="inputBlock">
              <img src="/img/search.svg" alt="Search"/>
              <input placeholder="Поиск..." />
            </div>
          </div>

          <div className="cards">
            {items.map(item => {
              return (
                <Card 
                  title={item.title}
                  price={item.price}
                  imageUrl={item.imageUrl}
                  onClickPlus={(item) => addItemToCart(item)}
                />
              )
            })}

          </div>

        </div>
    </div>
  );
}

export default App;
