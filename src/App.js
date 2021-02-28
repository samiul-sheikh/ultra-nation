import './App.css';
import { useEffect, useState } from 'react';
import Country from './Components/Country/Country';

function App() {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
            .then(res => res.json())
            .then(data => setCountries(data))
            .catch(error => console.log('Error Found in Data Load!'))
    }, [])

    // adding eventHandler
    const handleAddCountry = (country) => {
        console.log('country added', country) 
    }

    return (
        <div className="App">
            <h1>Country Loaded: {countries.length}</h1>
            {/* send dynamic object and event handler */}
            <ul>
                {
                    countries.map(country => <Country country={country} handleAddCountry={handleAddCountry} key={country.alpha3Code}></Country>)
                }
            </ul>
        </div>
    );
}

export default App;
