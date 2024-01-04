import './App.css';
import mebleImage from "./img/meble1.jpg";
import stolikImage from "./img/Stolik.png";
import zegarImage from "./img/Zegar.png";
import mapaImage from "./img/mapagoogle.png";

function App() {
  return (
    <div className="App">

      <div className="Menu">
        <h1>Antyki Renowacja Mebli Zabytkowych</h1>
        <p>strona główna</p>
        <p>galeria</p>
        <p>cennik</p>
        <p>kontakt</p>
      </div>

      <div className="HeaderMain">
        <div className="ImageMeble">
          <img src={mebleImage} alt="ImageMeble1"></img>
        </div>
        <div className="HeaderText">
          <h1>NASZĄ PASJĄ JEST ODNAWIANIE ANTYKÓW</h1>
          <p>Myślisz o renowacji drzwi? Chcesz odświeżyć zabytkową szafę? Albo chcesz odrestaurować stary zegar?</p>
          <div className="Button1">Zobacz nasze renowacje</div>
        </div>
      </div>

      <div className="MiddleMain">

      </div>

      <div className="Gallery">

      </div>

      <div className="Pricing">
        <h1>Cennik</h1>
        <p>Każdą cenę renowacji ustalamy indywidualnie biorąc pod uwagę stan zniszczeń, sumę nakładu pracy oraz materiałów potrzebnych do wykonania danej renowacji.</p>
        <p>
        Wstępną wycenę dokonujemy poprzez:
          <ul>
            <li>oględziny danego mebla,</li>
            <li>online, poprzez wysłanie zdjęć na adres mailowy</li>
            <li>telefonicznie, m.in. przy użyciu wiadomości MMS</li>
          </ul>
        </p>
      </div>

      <div className="Contact">

      </div>


      <div className="Footer">
        <div className="FooterLeft">
          <p>strona główna</p>
          <p>galeria</p>
          <p>cennik</p>
          <p>kontakt</p>
        </div>
        <div className="FooterRight">
          <p>Antyki Renowacja Mebli Zabytkowych</p>
          <p>ul. Parkowa 5A, 42-286 Koszęcin</p>
          <p>509 308 977</p>
          <p>665 578 013</p>
        </div>
      </div>
    </div>
  );
}

export default App;
