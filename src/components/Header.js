import { Link } from 'react-router-dom'


function Header({ onClickCart }) {
    return (
        <header>
            <Link to='/'>
                <div className="headerLeft">

                <img width={40} height={40} src="/img/logo.png" alt="logo"/>

                <div className="headerInfo">
                    <h3>SNEAKERS SHOP</h3>
                    <p>Магазин лучших кроссовок</p>
                </div>

                </div>
            </Link>
              

            <div className="headerRight">
            <ul>

                <li className="cart" onClick={onClickCart}>
                <img className="basket_img" width={18} height={18} src="/img/cart.svg" alt="basket"/>
                <span>0 руб.</span>
                </li>

                <Link to='/favorites'>
                    <li>
                    <img width={18} height={18} src="/img/favorite.svg" alt="favorite"/>
                    </li>
                </Link>

                <li className="user_img">
                <img width={18} height={18} src="/img/user.svg" alt="user"/>
                </li>

            </ul>
            </div>

         </header>
    );
}

export default Header;