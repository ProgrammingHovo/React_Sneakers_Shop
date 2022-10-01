import React from "react";
import Card from "../components/Card";

export default function Home({  searchValue,
                                setSearchValue,
                                onChangeSearchValue,
                                items,
                                addItemToCart,
                                addItemToFavorites,
                                isLoading,
                                
                               }) {

    const renderItems = () => {
      const filteredItems = items.filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))

          return (isLoading ? [...Array(12)] : filteredItems).map((item, index) => (
              <Card 
                key={index}
                onClickPlus={(item) => addItemToCart(item)}
                onClickFavorite={(item) => addItemToFavorites(item)}
                isLoading={isLoading}
                {...item}
              />
          ))
    }                              

    return(
        <>
            <div className="title_and_input">
              <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все кроссовки'}</h1>
              
              <div className="inputBlock">
                <img src="/img/search.svg" alt="Search"/>
                {searchValue && <img onClick={() => setSearchValue('')} className="search_clear" width={14} height={11} src="/img/x-icon.svg" alt="Clear" />}
                <input onChange={onChangeSearchValue} value={searchValue} placeholder="Поиск..." />
              </div>
            </div>

            <div className="cards">
              {renderItems()}

            </div>
      
        </>
    );
}