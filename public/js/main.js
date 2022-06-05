// const async = require("hbs/lib/async");
const cityName = document.getElementById("cityName");
const city_name = document.getElementById("city_name");

const submitbtm = document.getElementById("submitbtm");
const temp = document.getElementById("temp");
const temp_status = document.getElementById("temp_status");


const getInfo = async (event) => {
    // url me query string disabled karne ke liye below methord;
    event.preventDefault();
    let cityval = cityName.value;
    if (cityval === "") {
        city_name.innerText = `pls write the city name before search`;
    } else {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=b7d2c636faf663817ce81b06c4c1ff9e`;
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data]
            console.log(arrData);
            city_name.innerText = `${arrData[0].name} , ${arrData[0].sys.country}`;
            temp.innerText = arrData[0].main.temp;
            temp_status.innerText = arrData[0].weather[0].main;

        } catch {
            city_name.innerText = `pls enter the city name properly`;
        }

    }
}


submitbtm.addEventListener("click", getInfo);