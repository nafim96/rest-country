
import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';

const Home = () => {
    const [countries, setCountries] = useState([])
    // console.log(countries);
    useEffect(async () => {
        const url = `https://restcountries.eu/rest/v2/all`;
        const promise = await fetch(url)
        const data = await promise.json();
        setCountries(data)
    }, [])
    return (
        <div>
            {
                countries.map(country => <Country country={country} key={country.alpha3Code}></Country>)
            }
        </div>
    );
};

export default Home;