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
            console.log(data);
            let gelenVeri = `<h1 class="text-center">${data.name}</h1>
            <h2 class="text-center">${data.sys.country}</h2>
            <h3 class="text-center">${data.main.temp}</h3>
            <h4 class="text-center">${data.weather[0].main}</h4>`;
        document.querySelector("#info").innerHTML=gelenVeri;
        });
});
