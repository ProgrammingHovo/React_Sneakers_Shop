import React, { useContext } from "react";
import Card from "../components/Card";
import AppContext from "../context";

export default function Favorites({ addItemToCart, addItemToFavorites, removeItemFromFavorites }) {
  const { favoriteItems } = useContext(AppContext)

    return(
        <>
            <div className="title_and_input">
              <h1>Мои закладки</h1>
            </div>

            <div className="cards">
              {favoriteItems
                .map((item, index) => {
                return (
                  <Card 
                    key={index}
                    {...item}
                    onClickPlus={(item) => addItemToCart(item)}
                    onClickFavorite={(item) => addItemToFavorites(item)}
                    removeItemFromFavorites={(item) => removeItemFromFavorites(item)}
                    favorited={true}
                  />
                )
              })}

            </div>

        </>
    );
}