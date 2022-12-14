import { useHttp } from "../hooks/http.hook";


export const LocationServices = () => {

    const { loading, error, clearError, request } = useHttp();

    const _apiBase = 'https://us1.locationiq.com/v1/';
    const _apiKey = 'key=pk.f91a720b32cc38063ddddf280883aed0';
    const _forvard = 'forward?';
    const _reverse = 'reverse?';
    const _lat = '&lat=';
    const _lon = '&lon=';
    const _format = '&format=json';
    // const _query = '&query=';
    // https://us1.locationiq.com/v1/reverse?key=%3CYour_API_Access_Token%3E&lat=51.50344025&lon=-0.12770820958562096&format=json

    const getLocationNameByCrd = (lat, lon) => {
        const res = request(`${_apiBase}${_reverse}${_apiKey}${_lat}${lat}${_lon}${lon}${_format}`);

        return res;
    }

    // const getCrdByLocation = (location) => {
    //     const res = request(`${_apiBase}${_forvard}${_apiKey}"""${_lat}${lat}${_lon}${lon}"""${_format}`);

    //     return res;
    // }

    // return {getLocationNameByCrd, getCrdByLocation};
    return {getLocationNameByCrd};
}