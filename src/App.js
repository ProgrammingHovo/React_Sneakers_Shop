import React, { useState, useEffect } from "react"
import {  Routes, Route } from "react-router-dom"
import axios from 'axios'
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import AppContext from './context'

import Home from './pages/Home';
import Favorites from "./pages/Favorites";
import Orders from "./pages/Orders";


function App() {
  const [ isCartOpened, setIsCartOpened ] = useState(false)
  const [ searchValue, setSearchValue ] = useState('')
  const [ items, setItems ] = useState([]);
  const [ cartItems, setCartItems ] = useState([]);
  const [ favoriteItems, setFavoriteItems ] = useState([]);
  const [ isLoading, setIsLoading ] = useState(true)
  
  const isItemAddedToCart = (parentId) => {
    return (cartItems.some((obj) => Number(obj.parentId) === Number(parentId)))
  } 

  const isItemAddedToFavorites = (id) => {
    return favoriteItems.some((obj) => Number(obj.parentId) === Number(id))
  }


  useEffect(() => {
    async function fetchData() {
      try {
        const itemsResponse = await axios.get('https://63222e00fd698dfa29088340.mockapi.io/items')
        const cartResponse = await axios.get('https://63222e00fd698dfa29088340.mockapi.io/cart')
        const favoritesResponse = await axios.get('https://63222e00fd698dfa29088340.mockapi.io/favorites')

        setIsLoading(false)


        setFavoriteItems(favoritesResponse.data)
        setCartItems(cartResponse.data)
        setItems(itemsResponse.data)

      } catch (error) {
        alert("Threw an error during request data.")
      }
    }

    fetchData()
  }, [])

  console.log(cartItems);
  console.log(favoriteItems);




  const addItemToCart = async (item) => {
    try {
      console.log(item.parentId);
    const findItem = cartItems.find(obj => Number(obj.parentId) === Number(item.parentId))
    if (findItem) {
      setCartItems(prevItems => prevItems.filter(obj => Number(obj.parentId) !== Number(item.parentId)))
      await axios.delete(`https://63222e00fd698dfa29088340.mockapi.io/cart/${findItem.id}`)
     } else {
      setCartItems(prevItems => [ ...prevItems, item ])
      const { data } = await axios.post('https://63222e00fd698dfa29088340.mockapi.io/cart', item)
      setCartItems(prevItems => prevItems.map(item => {
        if (Number(item.parentId) === Number(data.parentId)) {
          return {
            ...item,
            id: data.id
          }
        }
        return item;
      })

      )
     }  
   } catch (error) {
     alert('Threw an error during adding to cart.')
     console.error(error)
   }
  }

  const removeItem = async (id) => {
    try {
      setCartItems(prevItems => prevItems.filter(item => Number(item.id) !== Number(id)))
      await axios.delete(`https://63222e00fd698dfa29088340.mockapi.io/cart/${id}`)
    } catch (error) {
      alert('Threw an error during removing.')
    }
  }

  const removeItemFromFavorites = async (item) => {
    try {
      setFavoriteItems(prevItems => prevItems.filter(obj => Number(obj.parentId) !== Number(item.parentId)))
      await axios.delete(`https://63222e00fd698dfa29088340.mockapi.io/favorites/${item.id}`)

    } catch (error) {
      alert('Threw an error during removing from favorites')
    }
  }

  const addItemToFavorites = async (item) => {
    try {
      const findItem = favoriteItems.find(obj => Number(obj.parentId) === Number(item.id))
      if(findItem) {
        setFavoriteItems(prevItems => prevItems.filter(obj => Number(obj.parentId) !== Number(item.id)))
        await axios.delete(`https://63222e00fd698dfa29088340.mockapi.io/favorites/${findItem.id}`)
      } else {
        setFavoriteItems(prevItems => [ ...prevItems, item ])
        const { data } = await axios.post('https://63222e00fd698dfa29088340.mockapi.io/favorites', item)
        setFavoriteItems(prevItems => prevItems.map(item => {
          if (item.parentId === data.parentId) {
            return {
              ...item,
              id: data.id,
              parentId: data.parentId
            }
          }
          return item;
        }))
      }
    } catch (error) {
      alert('Threw an error during adding to favorites.')
    } 
  }


  const onChangeSearchValue = (event) => {
    setSearchValue(event.target.value)
  }


  return (
    <AppContext.Provider value={{ items, cartItems, setCartItems, favoriteItems, isItemAddedToCart, setIsCartOpened, isItemAddedToFavorites }}>
      <div className="wrapper">

          <Drawer items={cartItems} onClickRemove={removeItem} isCartOpened={isCartOpened} />


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
                                          removeItemFromFavorites={removeItemFromFavorites}
                                          />} />

              <Route path="/orders" element={<Orders isLoading={isLoading} />} />                            
            </Routes>
          
          
              
          
            
          </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
