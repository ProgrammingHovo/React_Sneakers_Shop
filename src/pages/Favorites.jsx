import React, { useContext } from "react";
import Card from "../components/Card";
import AppContext from "../context";

export default function Favorites({ addItemToCart, addItemToFavorites }) {
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
                    id={item.id}
                    title={item.title}
                    price={item.price}
                    imageUrl={item.imageUrl}
                    onClickPlus={(item) => addItemToCart(item)}
                    onClickFavorite={(item) => addItemToFavorites(item)}
                    favorited={true}
                  />
                )
              })}

            </div>

        </>
    );
}