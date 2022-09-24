import React from 'react';
import './Country.css';

const Country = (props) => {
    const { area, region, population, name, flags } = props.country;
    return (
        <div className='country'>
            <h2>Country Name: {name.common}</h2>
            <img src={flags.png} alt="" />
            <h5>Population: {population}</h5>
            <h5>Area: {area}</h5>
            <h5>Region: {region}</h5>
        </div>
    );
};

export default Country;