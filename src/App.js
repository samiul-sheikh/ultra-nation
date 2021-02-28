import './App.css';
import { useEffect, useState } from 'react';
import Country from './Components/Country/Country';
import Cart from './Components/Cart/Cart';

function App() {
    const [countries, setCountries] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
            .then(res => res.json())
            .then(data => setCountries(data))
            .catch(error => console.log('Error Found in Data Load!'))
    }, [])

    // adding eventHandler
    const handleAddCountry = (country) => {
        // console.log('country added', country)
        const newCart =  [...cart, country];
        setCart(newCart);
    }

    return (
        <div className="App">
            <h1>Country Loaded: {countries.length}</h1>
            <h4>Country added: {cart.length}</h4>
            <Cart cart={cart}></Cart>

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
