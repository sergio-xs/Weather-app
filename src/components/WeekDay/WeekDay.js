import React from 'react'
import "./WeekDay.css"
import {getWeatherIcon} from '../../functions/functions'
const WeekDay = ({date,temp,description}) => {
    const ikona=getWeatherIcon(description);
    return (
        <div className="day">
            <h4>{date}</h4>
            <h2>{temp}°c</h2>
            <img className="ikona" src={require(`../../images/${ikona}`).default} />
            <h3>{description}</h3>
        </div>
    )
}

export default WeekDay
