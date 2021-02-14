//api object
const api = {
    key: "a7ff38ee1c49b77064c72f94875dcc9e",
    url: "https://api.openweathermap.org/data/2.5/"
  }
  //selects the change location hyperlink html element
  const changeLocationBtn = document.querySelector('#');
  changeLocationBtn.addEventListener('keypress', pressEnter);
  //if 'enter' has been hit
  function pressEnter(evt) {
    if (evt.keyCode === 13) {
  //get searchbox value
      getWeather(changeLocationBtn.value);
    }
  }
  //get weather from api using searchbox value
  function getWeather (location) {
    fetch(`${api.url}weather?q=${query}&units=metric&APPID=${api.key}`)
    //a function that takes results as a parameter and returns it in json format
      .then(results => {
        return results.json();
      }).then(displayWeather);
  }
  
  function displayWeather (results) {
    //selects the html 'location' element and appends the city name in its place
    let city = document.querySelector('location');
    city.innerText = `${results.name}, ${results.sys.country}`;
  
    //selects the temperature element and appends the temperature in its place
    let temp = document.querySelector('temp-today');
    temp.innerHTML = `${Math.round(results.main.temp)}<span>°c</span>`;
  
  //selects the morning temperature and evening temperature element and appends
  //both temperatures in its place
    let hilow = document.querySelector('.morn-temp .even-temp');
    hilow.innerText = `${Math.round(results.main.temp_min)}°c / ${Math.round(weather.main.temp_max)}°c`;
  }
  