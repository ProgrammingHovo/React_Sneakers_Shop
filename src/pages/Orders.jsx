import React from "react";
import axios from "axios";
import Card from "../components/Card";

export default function Orders({ isLoading }) {
    const [ orders, setOrders ] = React.useState([])

    React.useEffect(() => {
      (async () => {
        const { data } = await axios.get('https://63222e00fd698dfa29088340.mockapi.io/orders')
        setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []))
      })()
      },[])


    return(
        <>
            <div className="title_and_input">
              <h1>Мои покупки</h1>
            </div>

            <div className="cards">
              {(isLoading ? [...Array(12)] : orders).map((item, index) => (
                  <Card 
                    key={index}
                    isLoading={isLoading}
                    {...item}
                  />
                )
              )}

            </div>

        </>
    );
}