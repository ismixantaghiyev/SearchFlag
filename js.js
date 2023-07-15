const countriesHTML = document.getElementById("countries")
const search = document.querySelector(".search");
let n = 4
const artir = document.querySelector(".btn2");
let regionSelect = document.querySelector("#regionSelect");

let datas = []
fetch('https://restcountries.com/v2/all')
    .then(response => response.json())
    .then(data => {
        datas = data
        function show() {
            countriesHTML.innerHTML = ""
            datas.filter(item => (item.name.toLowerCase().startsWith(search.value.toLowerCase()) && (item.region.toLowerCase().startsWith(regionSelect.value.toLowerCase())))).slice(0, n).map(country => {
                countriesHTML.innerHTML += `
            <div class="country">
            <div class="img">
                <img src="${country.flag}" alt="">
                </div>
            <h2 class="countryName">
                <h2>${country.name}</h2>
            <h3>Population: ${country.population}</h3>
            <h4>Region: ${country.region}</h4>
        </div>
            `
            })
        }
        show()
        artir.onclick = function () {
            n += 4
            show()
        }
        search.oninput = show
        regionSelect.onchange = show
    })

const darkButton=document.querySelector(".head button")
darkButton.onclick=function() {
    let element = document.body;
    element.classList.toggle("dark-mode");
    darkButton.classList.toggle("dark-mode");
}

