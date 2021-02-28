import React from 'react';

const Country = (props) => {
    // console.log(props)
    // console.log(props.country)

    // destructuring object
    const {name, population, region, flag} = props.country;

    const flagStyle = {height: '50px'}

    return (
        <div>
            {/* display dynamic received data */}
            <h4>This is {name}</h4>
            <img style={flagStyle} src={flag} alt=""/>
            <p>Population: {population}</p>
            <p>Region: {region}</p>
        </div>
    );
};

export default Country;