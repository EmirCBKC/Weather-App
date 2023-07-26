import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
// import Navbar from './components/navbar';
// import Footer from './components/footer';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

function App() {
  useEffect(() => {
    AOS.init(); // AOS'u başlatın
    let url = new URL("https://api.openweathermap.org/data/2.5/weather?q=istanbul&appid=9a31482e32236a614b47b601b3056279&units=metric");
    let adress = new URLSearchParams(url.search);
    let search = document.querySelector("#search");
    search.addEventListener("change", (e) => {
      adress.set("q", e.target.value);
      url.search = adress.toString();
      const api = url;
      fetch(api)
        .then(res => res.json())
        .then(data => {
          let gelenVeri = `<h1 class="text-center">${data.name}</h1>
            <h2 class="text-center">${data.sys.country}</h2>
            <h3 class="text-center">${data.main.temp}</h3>
            <h4 class="text-center">${data.weather[0].main}</h4>`;
          document.querySelector("#info").innerHTML = gelenVeri;
        }).catch(error=>console.log("HATA",error));
    });
  }, []);

  return (
    <>
      <div className="App">
        <div className="Background d-flex flex-column justify-content-center align-items-center">
          <p>Enter the city name and find out the weather forecast.</p>
          <div id="weather" className="WeatherCard d-flex flex-column align-items-center mt-4">
            <input className="mt-4" type="text" id="search"></input>
            <div id="info">
              <h1 className="text-center">Ankara</h1>
              <h2 className="text-center">TR</h2>
              <h3 className="text-center">24</h3>
              <h4 className="text-center">CLEAR</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;