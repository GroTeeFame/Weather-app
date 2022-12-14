import { useHttp } from "../hooks/http.hook";


export const WeatherServices = () => {

    const { loading, error, clearError, request } = useHttp();

    //  MY GO TO API FETCH................
   
    // https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/kyiv/next7days?&unitGroup=metric&include=events%2Cdays%2Chours%2Calerts%2Ccurrent&key=3KYE83PFLEVDCH85Y545NRWKU&contentType=json
   
    const _apiTimeline = 'timeline/';
    const _apiLocationTimeline = 'kyiv/';
    // const _apiLocationLatitudeLongitude = '49.795555555,30.116666666';
    const _apiAggregateDays = 'next7days?';
    const _apiEvents = '&include=events';
    const _apiTimelineSetings = '%2Cdays%2Chours%2Calerts%2Ccurrent';

    
    const _apiBase = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/';
    const _apiKey = '&key=3KYE83PFLEVDCH85Y545NRWKU';
    const _apiUnitGroup_metric = '&unitGroup=metric';
    const _apiUnitGroup_imperial = '&unitGroup=us';
    const _apiLocation = '&locations=kyiv';
    const _apiAggregateHours = '&aggregateHours=24';
    const _apiForecastDays = '&forecastDays=6';
    const _apiContentType = '&contentType=json';
    const _apiIcons = '&iconSet=icons2';

    const getWeather = () => {

        const res = request(`${_apiBase}${_apiTimeline}${_apiLocationTimeline}${_apiAggregateDays}${_apiUnitGroup_metric}${_apiEvents}${_apiTimelineSetings}${_apiKey}${_apiContentType}`);

        return res;
    }

    const getWeatherByLL = (latitudeLongitude) => {
        const res = request(`${_apiBase}${_apiTimeline}${latitudeLongitude}/${_apiAggregateDays}${_apiUnitGroup_metric}${_apiEvents}${_apiTimelineSetings}${_apiKey}${_apiContentType}`);

        return res;
    }


    return {loading, error, clearError, getWeather, getWeatherByLL};
}