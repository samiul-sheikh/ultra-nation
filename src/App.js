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
    return (
        <div className="App">
            <h1>Country Loaded: {countries.length}</h1>
            {/* send dynamic object for access all property */}
            <ul>
                {
                    countries.map(country => <Country country={country} key={country.alpha3Code}></Country>)
                }
            </ul>
        </div>
    );
}

export default App;
