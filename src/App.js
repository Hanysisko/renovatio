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

      <div className="MiddleMain1">
        <div className="Section1">
          <h1>Kilka słów o nas</h1>
          <p>Renowacją mebli zajmujemy się od ponad 30 lat, jednak doświadczenie pracy w drewnie zaczyna się już
              dużo wcześniej i przechodzi z pokolenia na pokolenie, od dziadka po ojca i synów.</p>
        </div>
        <div className="Section2">
          <img src={stolikImage} alt="StolikImage"></img>
        </div>
      </div>

      <div className="MiddleMain2">
        <div className="Section1">
          <img src={zegarImage} alt="ZegarImage"></img>
        </div>
        <div className="Section2">
          <div className="Paragraph1">
            <h1>Czym się zajmujemy?</h1>
            <p>
              <ul>
                <li>kompleksową renowacją mebli,</li>
                <li>kompleksową renowacją mebli,renowacją zabytkowych przedmiotów,</li>
                <li>renowacją stolarki budowlanej (drzwi, schody, okna itp.),</li>
                <li>renowacja architektury sakralnej (konfesjonały, ambony, figury, krzyże, ołtarze),</li>
              </ul>
            </p>
            <p2>Zlecenia realizujemy dla osób prywatnych, sklepów, firm oraz instytucji publicznych.</p2>
          </div>
          <div className="Paragraph2">
            <h1>Nasze podejście do odnawiania </h1>
            <p>Renowację mebli przeprowadzana jest starymi metodami (szelak, politura, wosk). Meble są
odrobaczane, czyszczone i uzupełniane są wszelkiego rodzaju ubytki i rzeźby, a następnie nakładana
jest odpowiednia warstwa zabezpieczająca.</p>
            <p>Do każdej renowacji podchodzimy indywidualnie z rzetelną
uwagą i zaangażowaniem, stosując odpowiednią technologię oraz dopasowane materiały, przywracając
pierwotny wygląd, charakter i funkcjonalność, tak aby mogli Państwo cieszyć się użytkowaniem przez
następne dłuuugie lata. </p>
          </div>
        </div>
      </div>







      <div className="Gallery">
        <h1>GALERIA WIP</h1>
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
        <p2>Oferujemy transport mebli od i do klienta. Zapewniamy odpowiednie zabezpieczenie, tak aby meble nieuległy uszkodzeniu.</p2>
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
