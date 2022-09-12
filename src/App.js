import Header from "./components/Header";
import Card from "./components/Card";
import Drawer from "./components/Drawer";

function App() {
  return (
    <div className="wrapper">

        <Drawer />

        <Header />

        <div className="content">

          <div className="title_and_input">
            <h1>Все кроссовки</h1>
            
            <div className="inputBlock">
              <img src="/img/search.svg" alt="Search"/>
              <input placeholder="Поиск..." />
            </div>
          </div>

          <div className="cards">
            <Card />
          </div>

        </div>
    </div>
  );
}

export default App;
