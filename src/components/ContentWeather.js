import React from "react";
import { useEffect, useState } from "react";
function ContentWeather() {
    let [weather, setWeather] = useState('');
    let [weather_arr, setWeather_arr] = useState('');
    let country = '',
        region = '',
        localtime = '',
        last_updated = '',
        temp_c = '',
        wind_kph = '';
        if (weather_arr) {
                country = weather_arr.location.country
                region = weather_arr.location.region
                localtime = weather_arr.location.localtime
                last_updated = weather_arr.current.last_updated
                temp_c = weather_arr.current.temp_c
                wind_kph = weather_arr.current.wind_kph
        }
    return (
        <div className="content">
            <form className="api_form" onSubmit={(e)=>{
                e.preventDefault();
                fetch(`http://api.weatherapi.com/v1/current.json?key=20b1081934d3450f949121948222708&q=${weather}`)
                .then(el => el.json())
                .then(elem => setWeather_arr(elem))
                console.log(weather_arr);
                

            }} >
                <input type="text" value={weather} onChange={(e)=>{
                    setWeather(e.target.value)
                }}/>
                <button>Search Weather</button>
            </form>
            <div className="api_data">
                <ul>
                    <li><i>country - </i> <b>{country}</b></li>
                    <li><i>region - </i> <b>{region}</b></li>
                    <li><i>localtime - </i> <b>{localtime}</b></li>
                    <li><i>last updated - </i> <b>{last_updated}</b></li>
                    <li><i>temp c - </i> <b>{temp_c}</b></li>
                    <li><i>wind kph - </i> <b>{wind_kph}</b></li>
                </ul>
                
            </div>
        </div>
    )
}
export default ContentWeather