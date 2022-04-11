const animeQuote = document.querySelector("#animeQuote");
const Anime = document.querySelector("#Anime"); 
const button = document.querySelector("#button"); 

button.addEventListener("click", fetchAnimeQuote); 

function fetchAnimeQuote () {
    fetch("https://animechan.vercel.app/api/random")
    .then(res => res.json())
    .then(data => {
        animeQuote.innerHTML =  data.quote;
        Anime.innerHTML = data.anime; 
    })
}

