function Drawer() {
    return (
        <div className="overlay">
          <div className="drawer">

            <h2>Корзина <img className="btnRemove" src="/img/btn_remove.svg" alt="Remove" /></h2>


            <div className="items">

              <div className="cartItem">
                  <img width={70} height={70} src="/img/sneakers/1.jpg" alt="Sneaker"/>
                  
                  <div>
                    <p>Мужские Кроссовки Nike Air Max 270</p>
                    <b>12 999 руб.</b>
                  </div>

                  <img className="btnRemove" src="/img/btn_remove.svg" alt="Remove" />
                  
              </div>

              <div className="cartItem">
                  <img width={70} height={70} src="/img/sneakers/1.jpg" alt="Sneaker"/>
                  
                  <div>
                    <p>Мужские Кроссовки Nike Air Max 270</p>
                    <b>12 999 руб.</b>
                  </div>

                <img className="btnRemove" src="/img/btn_remove.svg" alt="Remove" />
                
              </div>
            
            </div>
            
            
            <ul className="cartTotalBlock">
              <li>
                <span>Итого: </span>
                <div></div>
                <b>21 498 руб. </b>
              </li>
              
              <li>
                <span>Налог 5%: </span>
                <div></div>
                <b>1074 руб. </b>
              </li>
            </ul>

            <button className="greenButton">Оформить заказ 
              <img src="/img/arrow.svg" alt="Arrow"/>
            </button>

          </div>
        </div>
    );
}

export default Drawer;