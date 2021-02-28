import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
    // declare 1st state/hook
    const [countries, setCountries] = useState([]);

    // declare 2nd state/hook
    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])
    return (
        <div className="App">
            
            <h1>Country Loaded: {countries.length}</h1>

            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
        </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
        </a>
            </header>
        </div>
    );
}

export default App;
