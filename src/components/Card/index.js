import React, { useState } from "react"
import styles from "./Card.module.scss"
import ContentLoader from "react-content-loader"
import AppContext from "../../context";



function Card({ id, title, price, imageUrl, onClickPlus, onClickFavorite, favorited, isLoading }) {
    const [ isAddedToFavorites, setIsAddedToFavorites ] = useState(favorited)
    const { isItemAddedToCart } = React.useContext(AppContext)                            


    const handleClickPlus = () => {
        onClickPlus({ id, title, price, imageUrl })
    }

    const handleClickFavorite = () => {
        setIsAddedToFavorites(!isAddedToFavorites)
        onClickFavorite({ id, title, price, imageUrl })

    }



    return (
        <>
            <div className={styles.card}>  
                
            {isLoading ? <ContentLoader 
                speed={2}
                width={160}
                height={224}
                viewBox="0 0 160 224"
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb"
            >
                <rect x="0" y="7" rx="10" ry="10" width="160" height="110" /> 
                <rect x="0" y="138" rx="3" ry="3" width="160" height="15" /> 
                <rect x="0" y="156" rx="3" ry="3" width="93" height="15" /> 
                <rect x="0" y="200" rx="8" ry="8" width="80" height="24" /> 
                <rect x="128" y="192" rx="8" ry="8" width="32" height="32" />
            </ContentLoader> : 

                <>
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

                    <button onClick={handleClickPlus} className={isItemAddedToCart(id) ? styles.plusButtonChecked : styles.plusButton}>
                        <img width={11} height={11} src={isItemAddedToCart(id) ? "/img/plus-checked.svg" : "/img/plus.svg"} alt="plus" />
                    </button>
                    </div>
                </>

            }


                

            </div>
        </>
    );
}

export default Card;

