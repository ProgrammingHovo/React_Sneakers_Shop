import React, { useState } from "react"

import styles from "./Card.module.scss"

console.log(styles);

function Card({ title, price, imageUrl, onClickPlus }) {
    const [ isAddedToCart, setIsAddedToCart ] = useState(false)
    const [ isAddedToFavorites, setIsAddedToFavorites ] = useState(false)

    const handleClickPlus = () => {
        setIsAddedToCart(!isAddedToCart)
        onClickPlus({ title, price, imageUrl })
    }

    const handleClickFavorite = () => {
        setIsAddedToFavorites(!isAddedToFavorites)
    }

    return (
        <>
            <div className={styles.card}>  

                <button onClick={handleClickFavorite} className={isAddedToFavorites ? styles.favoriteBtnChecked : styles.favoriteBtn}>
                    <img src={isAddedToFavorites ? "/img/heart_liked.svg" : "/img/heart_unliked.png"} alt="Unliked" />
                </button>
                <img className={styles.sneakerImg} width={133} height={112} src={imageUrl} alt="Sneaker" />
                <h5>{title}</h5>

                <div className={styles.cardBottom}>
                <div className={styles.priceInfo}>
                    <span>Цена:</span>
                    <b>{price} руб.</b>
                </div>

                <button onClick={handleClickPlus} className={isAddedToCart ? styles.plusButtonChecked : styles.plusButton}>
                    <img width={11} height={11} src={isAddedToCart ? "/img/plus-checked.svg" : "/img/plus.svg"} alt="plus" />
                </button>
                </div>

            </div>
        </>
    );
}

export default Card;

