import { WeatherIcons } from "../weatherIcons/WeatherIcons";
import './hourlyWeather.scss';

export const HourlyWeather = (props) => {

    const data = props.data;

    const View = () => {
        return data.map((item, i) => {
            return(
                <div key={i} className="hourly-weather-column">
                    <div className="hourly-weather-column-item">
                        <div className="hourly-weather-icon-wrapper">
                            <WeatherIcons icon={item.icon}/>
                        </div>
                        <div className="hourly-weather-column-item-temp">{item.temp}°</div>
                    </div>
                    <div className="hourly-weather-column-item">{item.datetime.slice(0,5)}</div>
                    <div className="hourly-weather-column-item">{item.humidity} %</div>
                    <div className="hourly-weather-column-item">{item.windspeed} m/s</div>
                </div>
            )
        })
    }

    return (
        <div className="scroll-wrapper">
            <span className="hourly-weather-title">{props.date} hourly weather</span>
            <div className="hourly-weather-wrapper">
                <div className="hourly-weather-column fixed">
                    <div className="hourly-weather-column-item-descr">
                        Temperature
                    </div>
                    <div className="hourly-weather-column-item-descr">Time</div>
                    <div className="hourly-weather-column-item-descr">Humidity</div>
                    <div className="hourly-weather-column-item-descr">Wind speed</div>
                </div>
                <View/>
            </div>
        </div>
    )
}
