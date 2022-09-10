function App() {
  return (
    <div className="wrapper">
        <header>
          <div className="headerLeft">

            <img width={40} height={40} src="/img/logo.png" alt="logo"/>

            <div className="headerInfo">
              <h3>SNEAKERS SHOP</h3>
              <p>Магазин лучших кроссовок</p>
            </div>

          </div>

          <div className="headerRight">
            <ul>

              <li>
                <img className="basket_img" width={18} height={18} src="/img/cart.svg" alt="basket"/>
                <span>0 руб.</span>
              </li>

              {/* <li>
                <img width={18} height={18} src="/img/favorite.svg" alt="favorite"/>
              </li> */}

              <li className="user_img">
                <img width={18} height={18} src="/img/user.svg" alt="user"/>
              </li>

            </ul>
          </div>

        </header>

        <div className="content">

          <h1>Все кроссовки</h1>

          <div className="cards">

          <div className="card">  

            <img className="sneakerImg" width={133} height={112} src="/img/sneakers/1.jpg" alt="Sneaker" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>

            <div className="cardBottom">
              <div className="priceInfo">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>

              <button className="plusButton">
                <img width={11} height={11} src="/img/plus.svg" alt="plus" />
              </button>
            </div>

            </div>


            <div className="card">  

            <img className="sneakerImg" width={133} height={112} src="/img/sneakers/2.jpg" alt="Sneaker" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>

            <div className="cardBottom">
              <div className="priceInfo">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>

              <button className="plusButton">
                <img width={11} height={11} src="/img/plus.svg" alt="plus" />
              </button>
            </div>

            </div>


            <div className="card">  

            <img className="sneakerImg" width={133} height={112} src="/img/sneakers/3.jpg" alt="Sneaker" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>

            <div className="cardBottom">
              <div className="priceInfo">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>

              <button className="plusButton">
                <img width={11} height={11} src="/img/plus.svg" alt="plus" />
              </button>
            </div>

            </div>


            <div className="card">  

            <img className="sneakerImg" width={133} height={112} src="/img/sneakers/4.jpg" alt="Sneaker" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>

            <div className="cardBottom">
              <div className="priceInfo">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>

              <button className="plusButton">
                <img width={11} height={11} src="/img/plus.svg" alt="plus" />
              </button>
            </div>

            </div>

          </div>

        </div>
    </div>
  );
}

export default App;
