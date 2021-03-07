
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CountryDetails = () => {
    const { countryName } = useParams()
    const [countryDetail, setCountryDetail] = useState([])
    const { name, flag, capital, borders, population, region } = countryDetail
    useEffect(() => {
        const url = `https://restcountries.eu/rest/v2/name/${countryName}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setCountryDetail(data[0]))
    }, [countryName])
    return (
        <div>
            <h2>Region: {region}</h2>
            <h1>{name}</h1>
            <h3>{capital}</h3>
            <h3>{borders}</h3>
            <h3>Population: {population}</h3>
            <img src={flag} alt="" />

        </div>
    );
};

export default CountryDetails;