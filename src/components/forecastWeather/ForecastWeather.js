import { useState } from "react";

import { WeatherIcons } from "../weatherIcons/WeatherIcons";
import './forecastWeather.scss';

import { HourlyWeather } from "../hourlyWeather/HourlyWeather";


const ForecastWeather = (props) => {

    const data = props.data;

    const [hours, setHours] = useState(null);

    const log = (prop) => {

        setHours(prop);
    }

    const View = () => {
        return data.map((item, i) => {
            if(i !== 0) {
                return(
                    <div onClick={(e) => {log(i)}} key={i} className="forecast-weather-column">
                        <div className="forecast-weather-column-item">
                            <div className="forecast-weather-icon-wrapper">
                                <WeatherIcons icon={item.icon}/>
                            </div>
                        </div>
                        <div className="forecast-weather-column-item">{`${item.datetime.slice(8, 10)}.${item.datetime.slice(5,7)}`}</div>
                        <div className="forecast-weather-column-item">{item.temp} ℃</div>
                        <div className="forecast-weather-column-item">{item.humidity} %</div>
                        <div className="forecast-weather-column-item">{item.windspeed} m/s</div>
                    </div>
                )
            } else {
                return(
                    <div className="forecast-weather-column-descr">
                        <span className="forecast-weather-column-item"></span>
                        <span className="forecast-weather-column-item">Date</span>
                        <span className="forecast-weather-column-item">Temperature</span>
                        <span className="forecast-weather-column-item">Humidity</span>
                        <span className="forecast-weather-column-item">Wind speed</span>
                    </div>
                )
            }
        })
    }

    return (
        <>
            <div className="forecast-weather-wrapper">
                <span className="forecast-weather-title">Weekly weather</span>
                <div className="forecast-weather-table-wrapper">
                    <div className="forecast-weather-table">
                        <View/>
                    </div>
                </div>
            </div>
            <div className="forecast-weather-hourly">
                { hours ? <HourlyWeather data={data[hours].hours} date={`${data[hours].datetime.slice(8)}.${data[hours].datetime.slice(5,7)}.${data[hours].datetime.slice(0,4)}  `}/> : null}

            </div>
        </>
    )
}

export default ForecastWeather;
