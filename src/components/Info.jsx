import React from 'react';
import AppContext from '../context';


const Info = ({ title, description, image, btnImage }) => {

    const { setIsCartOpened } = React.useContext(AppContext)

    return (
        <div className="empty_cart">
            <img width={120} height={120} src={image} alt="empty box" />
            <h3>{title}</h3>
            <p>{description}</p>
            <button onClick={() => setIsCartOpened(false)} className="greenButton">Вернуться назад 
            <img src={btnImage} alt="Arrow"/>
            </button>
        </div>
    )
}

export default Info;