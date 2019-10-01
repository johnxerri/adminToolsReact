import React from 'react';
import './Loader.css';

export default class Loader extends React.Component {
    render() {
        return (
            <div className="page-loader-wrapper">
                <div className="loader">
                    <div className="loader-linkt">
                        <div className="bg-linkt-k bar-1"></div>
                        <div className="bg-linkt-i bar-2"></div>
                        <div className="bg-linkt-l bar-3"></div>
                        <div className="bg-linkt-t bar-4"></div>
                    </div>
                    <p className="loader-linkt-p">Chargement...</p>
                </div>
            </div>
        )
    }
};