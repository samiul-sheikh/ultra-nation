import React from 'react';

const Country = (props) => {
    // console.log(props)
    // console.log(props.country)

    // destructuring object
    const {name, population, region, flag} = props.country;

    const handleAddCountry = props.handleAddCountry;

    const flagStyle = {height: '50px'}
    const countryStyle = {border: '1px solid red', margin: '10px', padding: '10px'}

    return (
        <div style={countryStyle}>
            {/* display dynamic received data */}
            <h4>This is {name}</h4>
            <img style={flagStyle} src={flag} alt=""/>
            <p>Population: {population}</p>
            <p>Region: {region}</p>
            {/* when pass parameter in handler add arrow function */}
            <button onClick={() => handleAddCountry(props.country)}>Add Country</button>
        </div>
    );
};

export default Country;