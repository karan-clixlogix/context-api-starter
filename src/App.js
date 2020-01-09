import React from 'react';
import './App.css';
import ProductList from "./components/productList";
import {AppProvider, CarsProvider} from "./context/CarsContext";

class App extends React.Component{

    render() {
        return (
            <AppProvider>
                <div className="App">
                    <ProductList/>
                </div>
            </AppProvider>
        );
    }
}

export default App;

