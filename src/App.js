import React, {useState, useEffect} from 'react';
import ProductList from "./components/ProductList";
import {StyledButton} from "./styles/Button";
import './styles/App.css';

function App() {
    const [data, setData] = useState([]);

    const getData = () => {
        fetch(`./assets/data.json`).then(function (response) {
            return response.json();
        }).then(function (myJson) {
                setData(myJson['offers']);
            });
    }

    const sortByCashBack = () => {
        const sorted = [...data].sort((a, b) => {
            return b.cash_back - a.cash_back;
        });
        setData(sorted);
    }

    useEffect(() => {
        getData()
    }, [])
    return (
        <div className="App">
            {
                <div>
                    <StyledButton onClick={sortByCashBack}>
                        Sort by cash back
                    </StyledButton>
                    <div>
                        <ProductList products={data}/>
                    </div>
                </div>
            }
        </div>
    );
}

export default App;