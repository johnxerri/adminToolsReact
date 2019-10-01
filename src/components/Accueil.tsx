import React, { Component } from 'react';
import logo from '../../src/logo.svg';
import '../../src/App.css';

class Accueil extends Component {
    render() {
        
        return (
            <div className="accueil">
                <img src={logo} className="App-logo" alt="logo" />
                <p>Made with <code>React</code> for the Extranet <code>♥</code> By Linkt.</p>
                <a className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer">
                    Learn React
                </a>
            </div>
        )
    }
}


export default Accueil;