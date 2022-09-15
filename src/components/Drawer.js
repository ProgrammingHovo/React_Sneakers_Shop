function Drawer({ onClickClose, items }) {
    return (
        <div className="overlay">
          <div className="drawer">

            <h2 onClick={onClickClose}>Корзина <img className="btnRemove" src="/img/btn_remove.svg" alt="Remove" /></h2>


            <div className="items">

              {items.map((item) => (
                <div className="cartItem">
                  <img width={70} height={70} src={item.imageUrl} alt="Sneaker"/>
                  
                  <div>
                    <p>{item.title}</p>
                    <b>{item.price} руб.</b>
                  </div>

                  <img className="btnRemove" src="/img/btn_remove.svg" alt="Remove" />
                </div>
              ))}

            
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