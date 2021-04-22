import React,{useState} from "react"

import {getToday,  getWeekDay} from "./functions/functions"

import Today from "./components/Today/Today"
import WeekDay from "./components/WeekDay/WeekDay"


const App = () => {
  const [query,setQuery] = useState("");
  const [weather,setWeather] = useState(null);

  const [currentCity, setCurrentCity] = useState('')
  
  const changeCity = (newCity) => {
    setQuery(newCity)
    setCurrentCity(newCity);
  }
  const handleSearch = () =>{
      if(query!==""){
      document.getElementById('error-handler').classList.remove("show");
      document.getElementById('error-handler').classList.add("hide");
      console.log(query)
      fetch(`https://api.weatherbit.io/v2.0/forecast/daily?city=${query}&country=AL&key=3fb3778b4e2d4af49e3d671de0bb3345`)
      .then(res=>res.json())
      .then(result =>{
        setWeather(result)
        setQuery("")
      })
      }else{
        document.getElementById('error-handler').classList.remove("hide");
        document.getElementById('error-handler').classList.add("show");
        document.getElementById('error-handler').innerHTML="Ju duhet te zgjidhni nje qytet me pare";
        
      }
        
  }

  return (
    <div className="app">
      <main>

          <form>
            <p className="hide" id="error-handler" style={{backgroundColor:"#960706",color:"white",fontSize:"15px", padding: "5px 0",
              transition: "2 opacity 2s 3s ease-in",width:"20%", margin:"auto", }}></p>
            <select className="select-city"
              onChange={(event) => changeCity(event.target.value)}
              value={currentCity}
            >
              <option className="qytet" value=""disabled hidden>Zgjidhni qytetin</option>
              <option className="qytet" value="berat">Berat</option>
              <option className="qytet" value="durres">Durres</option>
              <option className="qytet" value="elbasan">Elbasan</option>
              <option className="qytet" value="fier">Fier</option>
              <option className="qytet" value="gjirokaster">Gjirokaster</option>
              <option className="qytet" value="kamez">Kamez</option>
              <option className="qytet" value="kavaje">Kavaje</option>
              <option className="qytet" value="korce">Korce</option>
              <option className="qytet" value="lushnje">Lushnje</option>
              <option className="qytet" value="pogradec">Pogradec</option>
              <option className="qytet" value="sarande">Sarande</option>
              <option className="qytet" value="shkoder">Shkoder</option>
              <option className="qytet" value="tirana">Tirana</option>
              <option className="qytet" value="vlore">Vlore</option>   
                
            </select>
          <input type="button" style={{
              backgroundColor: "#003a70",
              border: "none",
              color: "white",
              padding: "1.5vh",
              textAlign: "center",
              textDecoration: "none",
              display: "block",
              fontSize: "20px",
              fontStyle:"bold",
              margin: "4px 2px",
              borderRadius:"20%",
              margin:"auto",
              cursor:"pointer"
            }} className="search-city"  value="Search" onClick={handleSearch}/> 

          </form>

        
        {weather&&(<>
        <Today city={weather.city_name} date={getToday(new Date())} temp={Math.round(weather.data[0].temp)} description={weather.data[0].weather.description}/>
        <h3 className="comming-days">Coming Days</h3>
        <div className="weekly-weather-box">
          {[1,2,3,4,5,6].map(i=><WeekDay key={i} date={getWeekDay(new Date(),i)} temp={weather.data[i].temp} description={weather.data[i].weather.description}/>)}
        </div>
        </>)}
      </main>
    </div>
  );
        }

export default App;
