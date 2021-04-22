let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

export const getToday = (d) =>{
  let day = days[d.getDay()]
  let date = d.getDate();
  let month = months[d.getMonth()]
  let year = d.getFullYear()

  return `${day} ${date} ${month} ${year}`
}

export const getWeatherIcon = (desc)=>{

  if(desc==="Heavy rain"){
    return "rainy-6.svg"
  }else if(desc==="Light rain"){
     return "rainy-5.svg"
  }else if(desc==="Clear sky"){
     return "day.svg"
  }
  else if(desc.includes("snow")){
     return "snow.svg"
  }
  else if(desc.includes("thunderstorm")){
     return "thunder.svg"
  }
  else if(desc.includes("clouds")){
     return "cloudy-day-1.svg"
  }
  else if(desc.includes("rain")){
     return "rainy-1.svg"
  }
  else if(desc.includes("fog" || "haze" || "dust" ||"smoke" ||"mist" ||"sleet")){
     return "cloudy.svg"
  }else {
    return "rainy-6-svg"
  }
}

export const getWeekDay =(d, i)=>{ 
  if(i<3){
    return days[d.getDay()+i]
  }
  else{
    return days[d.getDay()+(i-7)]
  }
}