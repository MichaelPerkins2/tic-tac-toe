import React, { Component } from 'react';
import './App.css';
import X from './X';
import O from './O';
import Blank from './Blank';
import Square from './Square';


class App extends Component {

    render() {
        return (
            <main className="App">
                <div className="Line">
                    <Square content={<X/>}/>
                    <Square content={<X/>}/>
                    <Square content={<X/>}/>
                </div>
                <div className="Line">
                    <Square content={<O/>}/>
                    <Square content={<O/>}/>
                    <Square content={<O/>}/>
                </div>
                <div className="Line">
                    <Square content={<Blank/>}/>
                    <Square content={<Blank/>}/>
                    <Square content={<Blank/>}/>
                </div>

            </main>
        );
    }
}

export default App;

