
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Country.css';

const Country = (props) => {
    const { name, flag } = props.country
    const countryStyle = {
        border: '1px solid gray',
        margin: '20px',
        borderRadius: '15px'
    }
    const history = useHistory()
    const handleDetail = (countryName) => {
        const url = `/name/${countryName}`;
        history.push(url)
    }

    return (
        <div className="country-container" style={countryStyle}>
            <h1>{name}</h1>
            <img src={flag} alt="" />
            <p><Link to={'/name/' + name}>show Country Details</Link></p>
            <button onClick={() => handleDetail(name)}>Country</button>
        </div>
    );
};

export default Country;