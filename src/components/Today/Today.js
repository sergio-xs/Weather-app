import React from 'react'
import "./Today.css"
import {getWeatherIcon} from '../../functions/functions'

const Today = ({city,date,temp,description,}) => {
    const ikona=getWeatherIcon(description);

    return (
        <>
        <br></br>
            <div className="location-box">
                <div className="location">{city}</div>
                <div className="date">{date}</div>
            </div>
            <div className="weather-box">
                <div className="temp">
                    <img className="ikona" src={require(`../../images/${ikona}`).default} /> {temp}°c</div>
                <div className="weather">{description}</div>
            </div>
        </>
    )
}

export default Today
