import React from "react";
import axios from "axios";
import Info from "./Info";
import AppContext from "../context";  
 
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

function Drawer({ items, onClickRemove, isCartOpened }) {
    const { setIsCartOpened, cartItems, setCartItems } = React.useContext(AppContext)
    const [ isOrderCompleted, setIsOrderCompleted ] = React.useState(false)
    const [ orderId, setOrderId ] = React.useState(null)
    const [ isLoading, setIsLoading ] = React.useState(false)
    const totalPrice = cartItems.reduce((sum, obj) => obj.price + sum, 0)
    const comission = Math.round(totalPrice/100*5)

    const onClickOrder = async () => {
     try {
      setIsLoading(true)
      const { data } = await axios.post('https://63222e00fd698dfa29088340.mockapi.io/orders', {
        items: cartItems})
      setOrderId(data.id)
      setIsOrderCompleted(true)
      setCartItems([])

      for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];
        await axios.delete(`https://63222e00fd698dfa29088340.mockapi.io/cart/${item.id}`)
        await delay(1000)
      }


     } catch (error) {
      alert("Threw an error during session!")
     }
     setIsLoading(false)
    }

    return (
        <div className={`overlay ${isCartOpened ? 'overlayVisible' : ""}`}>
          <div className="drawer">

            <h2 onClick={() => setIsCartOpened(false)}>Корзина <img className="btnRemove" src="/img/btn_remove.svg" alt="Remove" /></h2>


            


            {items.length > 0 ? 

            (<>
            <div className="items">

              {items.map((item, index) => (
                <div className="cartItem" key={index}>
                  <img width={70} height={70} src={item.imageUrl} alt="Sneaker"/>
                  
                  <div>
                    <p>{item.title}</p>
                    <b>{item.price} руб.</b>
                  </div>

                  <img onClick={() => onClickRemove(item.id)} className="btnRemove" src="/img/btn_remove.svg" alt="Remove" />
                </div>
              ))}

            
            </div>
            
            
            <ul className="cartTotalBlock">
              <li>
                <span>Итого: </span>
                <div></div>
                <b>{totalPrice} руб. </b>
              </li>
              
              <li>
                <span>Налог 5%: </span>
                <div></div>
                <b>{comission} руб. </b>
              </li>
            </ul>

            <button disabled={isLoading} onClick={onClickOrder} className="greenButton">Оформить заказ 
              <img src="/img/arrow.svg" alt="Arrow"/>
            </button>
            </>
           ) : (

            <Info title={isOrderCompleted ? "Заказ оформлен!" : "Корзина пустая"} 
                  description={isOrderCompleted ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке"` : "Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."} 
                  image={isOrderCompleted ? "/img/order_completed.svg" : "/img/empty_cart.svg"} 
                  btnImage={"/img/arrow.svg"} />
           )}

          </div>
        </div>
    );
}

export default Drawer;