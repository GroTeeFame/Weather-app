import { useState, useContext } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API_URL, geoApiOptions } from "../../services/geoApiOptions";

import {SearchHandlerContext} from '../displayWeather/DisplayWeather';

import './search.scss';

export const Search = () => {

    const {searchChange} = useContext(SearchHandlerContext); 

    const [search, setSearch] = useState(null);

    const loadOptions = (inputValue) => {
        return fetch(`${GEO_API_URL}/cities?minPopulation=100000&namePrefix=${inputValue}`, geoApiOptions)
            .then(response => response.json())
            .then(response => {
                return{
                    options: response.data.map((city) => {
                        return {
                            value: `${city.latitude},${city.longitude}`,
                            label: `${city.name}, ${city.countryCode}`,
                        };
                    }),
                };
            })
            .catch((err) => console.error(err));
    }

    const handleOnChange = (searchData) => {
        setSearch(searchData);
        searchChange(searchData);
    }

    return (
        <div className='header-search-wrapper'>
            <AsyncPaginate 
                className='header-search'
                // className='header-search-wrapper'
                placeholder='Search for city'
                debounceTimeout={600}
                value={search}
                onChange={handleOnChange}
                loadOptions={loadOptions}
            />
        </div>
    )
}