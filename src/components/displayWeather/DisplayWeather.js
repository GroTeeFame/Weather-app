import { useState, useEffect, createContext } from "react";

import { WeatherServices } from "../../services/WeatherServices";
import { LocationServices } from "../../services/locationServices";
import CurrentWeather from "../currentWeather/CurrentWeather";
import ForecastWeather from '../forecastWeather/ForecastWeather';
import { HourlyWeather } from "../hourlyWeather/HourlyWeather";
import { Header } from "../header/Header";
import Spinner from "../spinner/Spinner";


import './displayWeather.scss';


export const SearchHandlerContext = createContext();

var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
};

export const DisplayWeather = () => {

    const {loading, error, clearError, getWeather, getWeatherByLL} = WeatherServices();

    const {getLocationNameByCrd, getCrdByLocation} = LocationServices();

    const [data, setData] = useState(null);
    
    const [location, setLocation] = useState(null);

    const [search, setSearch] = useState(null);


    useEffect(() => {
        if (navigator.geolocation) {
            navigator.permissions
                .query({ name: "geolocation" })
                .then(function (result) {
                    if (result.state === "granted") {
                        console.log(result.state);
                        //If granted then you can directly call your function here
                        navigator.geolocation.getCurrentPosition(success);
                    } else if (result.state === "prompt") {
                        navigator.geolocation.getCurrentPosition(success, errors, options);
                    } else if (result.state === "denied") {
                        //If denied then you have to show instructions to enable location
                    }
                    result.onchange = function () {
                        console.log(result.state);
                    };
                });
        } else {
        alert("Sorry Not available!");
        }
    }, [])

    const success = (pos) => {
        let crd = pos.coords;

        clearError();
        getWeatherByLL(`${crd.latitude},${crd.longitude}`).then(onDataLoaded);
        getLocationNameByCrd(crd.latitude, crd.longitude).then(updateLocation);
    }
      
    const errors = (err) => {
        console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    const updateData = () => {
        if(!data){
            clearError();
            getWeather().then(onDataLoaded);
        }
    }

    const onDataLoaded = (data) => {
        setData(data);
    }

    const updateLocation = (locData) => {

        setLocation({
            city: locData.address.city,
            country: locData.address.country,
            countryCode: locData.address.country_code.toUpperCase(),
        });
    }
    const searchChange = (searchData) => {
        setSearch(searchData);
        clearError();
        getWeatherByLL(searchData.value).then(onDataLoaded);
    }

    if(data){
        const todayHourly = data.days[0].hours.slice(Number(data.currentConditions.datetime.slice(0, 2))+1).concat(data.days[1].hours).slice(0, 24);

        return(
            <>
                <SearchHandlerContext.Provider value={{searchChange}}>
                    <Header/>
                </SearchHandlerContext.Provider>
                <div className="main-wrapper"> 
                    <div className="today-weather-wrapper">
                        <CurrentWeather data={data.currentConditions} location={search ? search.label : location ? `${location.city}, ${location.countryCode}` : null}/>
                        <HourlyWeather data={todayHourly} date={'Today'}/>
                    </div>
                    <ForecastWeather data={data.days}/>
                </div>
            </>
        )
    } else {
        return(
            <>
                <SearchHandlerContext.Provider value={{searchChange}}>
                    <Header/>
                </SearchHandlerContext.Provider>
                <Spinner/>
            </>
        )
    }
}