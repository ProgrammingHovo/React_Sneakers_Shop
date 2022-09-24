import React, { useState, useEffect } from "react"
import {  Routes, Route } from "react-router-dom"
import axios from 'axios'
import Header from "./components/Header";
import Home from './pages/Home';
import Favorites from "./pages/Favorites";
import Drawer from "./components/Drawer";
import AppContext from './context'


function App() {
  const [ isCartOpened, setIsCartOpened ] = useState(false)
  const [ searchValue, setSearchValue ] = useState('')
  const [ items, setItems ] = useState([]);
  const [ cartItems, setCartItems ] = useState([]);
  const [ favoriteItems, setFavoriteItems ] = useState([]);
  const [ isLoading, setIsLoading ] = useState(true)
  
  const isItemAddedToCart = (id) => {
    return cartItems.some((obj) => Number(obj.id) === Number(id))
  }


  useEffect(() => {
    async function fetchData() {
      const itemsResponse = await axios.get('https://63222e00fd698dfa29088340.mockapi.io/items')
      const cartResponse = await axios.get('https://63222e00fd698dfa29088340.mockapi.io/cart')
      const favoritesResponse = await axios.get('https://63222e00fd698dfa29088340.mockapi.io/favorites')

      setIsLoading(false)


      setFavoriteItems(favoritesResponse.data)
      setCartItems(cartResponse.data)
      setItems(itemsResponse.data)
    }

    fetchData()
  }, [])


  const addItemToCart = (item) => {
   if (cartItems.find(obj => Number(obj.id) === Number(item.id))) {
    axios.delete(`https://63222e00fd698dfa29088340.mockapi.io/cart/${item.id}`)
    setCartItems(prevItems => prevItems.filter(obj => Number(obj.id) !== Number(item.id)))
   } else {
    axios.post('https://63222e00fd698dfa29088340.mockapi.io/cart', item)
    setCartItems(prevItems => [ ...prevItems, item ])
   }  
  }

  const removeItem = (id) => {
    axios.delete(`https://63222e00fd698dfa29088340.mockapi.io/cart/${id}`)

    setCartItems(prevItems => prevItems.filter(item => item.id !== id))
  }

  const addItemToFavorites = async (item) => {
    console.log(item.id)

    try {
      if(favoriteItems.find(obj => Number(obj.id) === Number(item.id))) {
        axios.delete(`https://63222e00fd698dfa29088340.mockapi.io/favorites/${item.id}`)
        setFavoriteItems(prevItems => prevItems.filter(obj => Number(obj.id) !== Number(item.id)))
      } else {
        const { data } = await axios.post('https://63222e00fd698dfa29088340.mockapi.io/favorites', item)
        setFavoriteItems(prevItems => [ ...prevItems, data ])
      }
    } catch (error) {
      alert('Could not add to favorites.')
    } 
  }


  const onChangeSearchValue = (event) => {
    setSearchValue(event.target.value)
  }


  return (
    <AppContext.Provider value={{ items, cartItems, setCartItems, favoriteItems, isItemAddedToCart, setIsCartOpened }}>
      <div className="wrapper">

          {isCartOpened && <Drawer items={cartItems} onClickRemove={removeItem} />}


          <Header onClickCart={() => setIsCartOpened(true)} />


          <div className="content">

            <Routes>
              <Route path="/" element={<Home 
                                          searchValue={searchValue}
                                          setSearchValue={setSearchValue}
                                          onChangeSearchValue={onChangeSearchValue}
                                          items={items}
                                          addItemToCart={addItemToCart}
                                          addItemToFavorites={addItemToFavorites}
                                          isLoading={isLoading}
                                          />} />

              <Route path="/favorites" element={<Favorites 
                                          addItemToCart={addItemToCart}
                                          addItemToFavorites={addItemToFavorites}
                                          />} />
            </Routes>
          
          
              
          
            
          </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
