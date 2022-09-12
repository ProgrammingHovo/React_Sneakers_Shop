function Card() {
    return (
        <>
            <div className="card">  

                <div className="favorite">
                    <img src="/img/heart_unliked.svg" alt="Unliked" />
                </div>
                <img className="sneakerImg" width={133} height={112} src="/img/sneakers/1.jpg" alt="Sneaker" />
                <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>

                <div className="cardBottom">
                <div className="priceInfo">
                    <span>Цена:</span>
                    <b>12 999 руб.</b>
                </div>

                <button className="plusButton">
                    <img width={11} height={11} src="/img/plus.svg" alt="plus" />
                </button>
                </div>

            </div>


            <div className="card">  

                <img className="sneakerImg" width={133} height={112} src="/img/sneakers/2.jpg" alt="Sneaker" />
                <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>

                <div className="cardBottom">
                <div className="priceInfo">
                    <span>Цена:</span>
                    <b>12 999 руб.</b>
                </div>

                <button className="plusButton">
                    <img width={11} height={11} src="/img/plus.svg" alt="plus" />
                </button>
                </div>

            </div>


            <div className="card">  

                <img className="sneakerImg" width={133} height={112} src="/img/sneakers/3.jpg" alt="Sneaker" />
                <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>

                <div className="cardBottom">
                <div className="priceInfo">
                    <span>Цена:</span>
                    <b>12 999 руб.</b>
                </div>

                <button className="plusButton">
                    <img width={11} height={11} src="/img/plus.svg" alt="plus" />
                </button>
                </div>

            </div>


            <div className="card">  

                <img className="sneakerImg" width={133} height={112} src="/img/sneakers/4.jpg" alt="Sneaker" />
                <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>

                <div className="cardBottom">
                <div className="priceInfo">
                    <span>Цена:</span>
                    <b>12 999 руб.</b>
                </div>

                <button className="plusButton">
                    <img width={11} height={11} src="/img/plus.svg" alt="plus" />
                </button>
                </div>

            </div>
        </>
    );
}

export default Card;

