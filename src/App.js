import React, {useState} from "react";
import axios from 'axios';


function App() {

  const [data,setData] = useState({})
  const [location, setLocation] = useState('')



  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=085c3e3f13130f3f56e53aa88093eeeb` // needs location, units, and apikey 


 const searchLocation = (event) => {       //This is how to get information from an API 
    if (event.key === 'Enter') {           // this if statement makes it so that when you type and hit enter the screen will refresh and give you new data
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })

      setLocation('') // we set location as empty string because it will be our input 
    }
  }



  return ( 
    <div className="app">
      <div className="search">
        <input 
        value={location}
        onChange= {event => setLocation(event.target.value)}
        placeholder='Enter Location'
        onKeyPress={searchLocation}
        type="text" />
      </div>
      <div className="container">
        <div className="top">
        <div className="location">
          <p>{data.name}</p>
          <div className="temp">
            {data.main ? <h1>{data.main.temp} ℉</h1> : null}
          </div>
        </div> 
          <div className="description">
            {data.weather ? <p>{data.weather[0].main} </p> : null}
          </div>
        </div>

{data.name != undefined && 
        <div className="bottom">
        <div className="feels">
          {data.main ? <p className="bold">{data.main.feels_like} ℉</p> : null}
          <p className="">feels like</p>
        </div>
        <div className="humidity">
        {data.main ? <p className="bold">{data.main.humidity}%</p> : null}
          <p>Humidity</p>
        </div>
        <div className="wind">
        {data.wind ? <p className="bold">{data.wind.speed} Mph</p> : null}
          <p>Wind Speed</p>
        </div>
      </div>
}

      </div>

    </div>
  );
}

export default App;
