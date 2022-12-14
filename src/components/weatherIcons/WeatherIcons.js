import './weatherIcons.scss';

// import snow from '../../resources/iconsForWeather/snow.png';
// import snow_showers_day from '../../resources/iconsForWeather/snow-showers-day.png';
// import snow_showers_night from '../../resources/iconsForWeather/snow-showers-night.png';
// import thunder_rain from '../../resources/iconsForWeather/thunder-rain.png';
// import thunder_showers_day from '../../resources/iconsForWeather/thunder-showers-day.png';
// import thunder_showers_night from '../../resources/iconsForWeather/thunder-showers-night.png';
// import rain from '../../resources/iconsForWeather/rain.png';
// import showers_day from '../../resources/iconsForWeather/showers-day.png';
// import showers_night from '../../resources/iconsForWeather/showers-night.png';
// import fog from '../../resources/iconsForWeather/fog.png';
// import wind from '../../resources/iconsForWeather/wind.png';
// import cloudy from '../../resources/iconsForWeather/cloudy.png';
// import partly_cloudy_day from '../../resources/iconsForWeather/partly-cloudy-day.png';
// import partly_cloudy_night from '../../resources/iconsForWeather/partly-cloudy-night.png';
// import clear_day from '../../resources/iconsForWeather/clear-day.png';
// import clear_night from '../../resources/iconsForWeather/clear-night.png';

// import snow from '../../resources/iconsForWeather2/Snow.png';
// import snow_showers_day from '../../resources/iconsForWeather2/Snow.png';
// import snow_showers_night from '../../resources/iconsForWeather2/Snow.png';
// import thunder_rain from '../../resources/iconsForWeather2/Rain&Thunderstorm.png';
// import thunder_showers_day from '../../resources/iconsForWeather2/Rain&Thunderstorm.png';
// import thunder_showers_night from '../../resources/iconsForWeather2/Rain&Thunderstorm.png';
// import rain from '../../resources/iconsForWeather2/Rain.png';
// import showers_day from '../../resources/iconsForWeather2/Scatterad-showers-day.png';
// import showers_night from '../../resources/iconsForWeather2/Scatterad-showers-night.png';
// import fog from '../../resources/iconsForWeather2/Fog.png';
// import wind from '../../resources/iconsForWeather2/Wind.png';
// import cloudy from '../../resources/iconsForWeather2/Cloudy.png';
// import partly_cloudy_day from '../../resources/iconsForWeather2/Partly-cloudy-day.png';
// import partly_cloudy_night from '../../resources/iconsForWeather2/Partly-cloudy-night.png';
// import clear_day from '../../resources/iconsForWeather2/Clear-day.png';
// import clear_night from '../../resources/iconsForWeather2/Clear-night.png';

import snow from '../../resources/iconsForWeather2C/Color-Snow.png';
import snow_showers_day from '../../resources/iconsForWeather2C/Color-Snow.png';
import snow_showers_night from '../../resources/iconsForWeather2C/Color-Snow.png';
import thunder_rain from '../../resources/iconsForWeather2C/Color-Rain&Thunderstorm.png';
import thunder_showers_day from '../../resources/iconsForWeather2C/Color-Rain&Thunderstorm.png';
import thunder_showers_night from '../../resources/iconsForWeather2C/Color-Rain&Thunderstorm.png';
import rain from '../../resources/iconsForWeather2C/Color-Rain.png';
import showers_day from '../../resources/iconsForWeather2C/Color-Scatterad-showers-day.png';
import showers_night from '../../resources/iconsForWeather2C/Color-Scatterad-showers-night.png';
import fog from '../../resources/iconsForWeather2C/Color-Fog.png';
import wind from '../../resources/iconsForWeather2C/Color-Wind.png';
import cloudy from '../../resources/iconsForWeather2C/Color-Cloudy.png';
import partly_cloudy_day from '../../resources/iconsForWeather2C/Color-Partly-cloudy-day.png';
import partly_cloudy_night from '../../resources/iconsForWeather2C/Color-Partly-cloudy-night.png';
import clear_day from '../../resources/iconsForWeather2C/Color-Clear-day.png';
import clear_night from '../../resources/iconsForWeather2C/Color-Clear-night.png';

import tumb_snow from '../../resources/iconsForWeather2C4X/4xColor-Snow.png';
import tumb_snow_showers_day from '../../resources/iconsForWeather2C4X/4xColor-Snow.png';
import tumb_snow_showers_night from '../../resources/iconsForWeather2C4X/4xColor-Snow.png';
import tumb_thunder_rain from '../../resources/iconsForWeather2C4X/4xColor-Rain&Thunderstorm.png';
import tumb_thunder_showers_day from '../../resources/iconsForWeather2C4X/4xColor-Rain&Thunderstorm.png';
import tumb_thunder_showers_night from '../../resources/iconsForWeather2C4X/4xColor-Rain&Thunderstorm.png';
import tumb_rain from '../../resources/iconsForWeather2C4X/4xColor-Rain.png';
import tumb_showers_day from '../../resources/iconsForWeather2C4X/4xColor-Scatterad-showers-day.png';
import tumb_showers_night from '../../resources/iconsForWeather2C4X/4xColor-Scatterad-showers-night.png';
import tumb_fog from '../../resources/iconsForWeather2C4X/4xColor-Fog.png';
import tumb_wind from '../../resources/iconsForWeather2C4X/4xColor-Wind.png';
import tumb_cloudy from '../../resources/iconsForWeather2C4X/4xColor-Cloudy.png';
import tumb_partly_cloudy_day from '../../resources/iconsForWeather2C4X/4xColor-Partly-cloudy-day.png';
import tumb_partly_cloudy_night from '../../resources/iconsForWeather2C4X/4xColor-Partly-cloudy-night.png';
import tumb_clear_day from '../../resources/iconsForWeather2C4X/4xColor-Clear-day.png';
import tumb_clear_night from '../../resources/iconsForWeather2C4X/4xColor-Clear-night.png';


export const WeatherIcons = ({thumb = false, ...props}) => {

    const showIcon = () => {
        if(thumb){
            switch (props.icon) {
                case 'snow':
                    return <img className='icon' src={tumb_snow} alt='Snow' />
                case 'snow-showers-day':
                    return <img className='icon' src={tumb_snow_showers_day} alt='Snow showers' />
                case 'snow-showers-night':
                    return <img className='icon' src={tumb_snow_showers_night} alt='Snow showers' />
                case 'thunder-rain':
                    return <img className='icon' src={tumb_thunder_rain} alt='Thunder rain' />
                case 'thunder-showers-day':
                    return <img className='icon' src={tumb_thunder_showers_day} alt='Thunder showers' />
                case 'thunder-showers-night':
                    return <img className='icon' src={tumb_thunder_showers_night} alt='Thunder showers' />
                case 'rain':
                    return <img className='icon' src={tumb_rain} alt='Rain' />
                case 'showers-day':
                    return <img className='icon' src={tumb_showers_day} alt='Showers day' />
                case 'showers-night':
                    return <img className='icon' src={tumb_showers_night} alt='Showers night' />
                case 'fog':
                    return <img className='icon' src={tumb_fog} alt='Fog' />
                case 'wind':
                    return <img className='icon' src={tumb_wind} alt='Wind' />
                case 'cloudy':
                    return <img className='icon' src={tumb_cloudy} alt='Cloudy' />
                case 'partly-cloudy-day':
                    return <img className='icon' src={tumb_partly_cloudy_day} alt='Partly cloudy day' />
                case 'partly-cloudy-night':
                    return <img className='icon' src={tumb_partly_cloudy_night} alt='Partly cloudy night' />
                case 'clear-day':
                    return <img className='icon' src={tumb_clear_day} alt='Clear day' />
                case 'clear-night':
                    return <img className='icon' src={tumb_clear_night} alt='Clear night' />   
            }
        }
        switch (props.icon) {
        // switch (icon) {
            case 'snow':
                return <img className='icon' src={snow} alt='Snow' />
            case 'snow-showers-day':
                return <img className='icon' src={snow_showers_day} alt='Snow showers' />
            case 'snow-showers-night':
                return <img className='icon' src={snow_showers_night} alt='Snow showers' />
            case 'thunder-rain':
                return <img className='icon' src={thunder_rain} alt='Thunder rain' />
            case 'thunder-showers-day':
                return <img className='icon' src={thunder_showers_day} alt='Thunder showers' />
            case 'thunder-showers-night':
                return <img className='icon' src={thunder_showers_night} alt='Thunder showers' />
            case 'rain':
                return <img className='icon' src={rain} alt='Rain' />
            case 'showers-day':
                return <img className='icon' src={showers_day} alt='Showers day' />
            case 'showers-night':
                return <img className='icon' src={showers_night} alt='Showers night' />
            case 'fog':
                return <img className='icon' src={fog} alt='Fog' />
            case 'wind':
                return <img className='icon' src={wind} alt='Wind' />
            case 'cloudy':
                return <img className='icon' src={cloudy} alt='Cloudy' />
            case 'partly-cloudy-day':
                return <img className='icon' src={partly_cloudy_day} alt='Partly cloudy day' />
            case 'partly-cloudy-night':
                return <img className='icon' src={partly_cloudy_night} alt='Partly cloudy night' />
            case 'clear-day':
                return <img className='icon' src={clear_day} alt='Clear day' />
            case 'clear-night':
                return <img className='icon' src={clear_night} alt='Clear night' />   
        }
    }

    return(
        <>
            {showIcon()}
        </>
    )
} 
