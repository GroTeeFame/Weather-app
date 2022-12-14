import { WeatherIcons } from "../weatherIcons/WeatherIcons";

import './CurrentWeather.scss';


const CurrentWeather = (props) => {

    const data = props.data;

    const View = () => {
        if(data){
            return (
                <div className="currentWeather-window">
                    <div className="currentWeather-wrapper">
                        <span className="currentWeather-title">Today weather</span>
                        <div className="currentWeather-header">
                            <div className="currentWeather-icon-wrapper">
                                <WeatherIcons thumb={true} icon={data.icon}/>
                            </div>
                            <div className="currentWeather-location">{props.location}</div>
                        </div>
                        <div className="currentWeather-temp">
                            <span>Temperature:</span>
                            <span>{data.temp} ℃</span>
                            <span>Precipitation chance:</span>
                            <span>{data.precipprob ? data.precipprob : 0}%</span>
                        </div>
                        <div className="horizontal">
                            <div className="currentWeather">
                                <span>Humidity:</span>
                                <span>{Math.round(data.humidity)} %</span>
                                <span>Pressure:</span>
                                <span>{data.pressure} mb</span>
                            </div>
                            <div className="currentWeather">
                                <span>Wind speed:</span>
                                <span>{Math.round(data.windspeed)} m/s</span>
                                <span>Direction:</span>
                                <span>{Math.round(data.winddir)}°</span>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }

    return (
        <>
            <View/>
        </>
    )

}

export default CurrentWeather;
