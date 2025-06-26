//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const location = document.querySelector('input').value
  const url = `https://api.weatherstack.com/current?access_key=a9aa269d64d6e88ef6d495aa18629f6c&units=f&query=${location}`
  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('h2').innerText = `Current Temperature: ${data.current.temperature}`
        document.querySelector('div').innerText = `Feels Like Temperature: ${data.current.feelslike}`
        document.querySelector('img').src = data.current.weather_icons
        document.querySelector('span').innerText = data.current.weather_descriptions
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}