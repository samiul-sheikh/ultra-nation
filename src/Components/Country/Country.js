import React from 'react';

// receive dynamic data
const Country = (props) => {
    console.log(props)
    return (
        <div>
            {/* display dynamic received data */}
            <h4>This is {props.name}</h4>
        </div>
    );
};

export default Country;