import './App.css';
import { useEffect, useState } from 'react';

function App() {
    // declare 1st state/hook
    const [countries, setCountries] = useState([]);

    // declare 2nd state/hook
    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
            .then(res => res.json())
            .then(data => {
                // set data in state
                setCountries(data);
                console.log(data)
                // display country name in console as array from object
                const names = data.map(country => country.name)
                console.log(names);
            })
            .catch(error => console.log('Error Found in Data Load!'))
    }, [])
    return (
        <div className="App">
            <h1>Country Loaded: {countries.length}</h1>
            {/* display country name in UI as list item */}
            <ul>
                {
                    countries.map(country => <li>{country.name}</li>)
                }
            </ul>
        </div>
    );
}

export default App;
