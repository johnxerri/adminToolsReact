import * as React from 'react';

import logo from './vendetta.png';
import logoFacebook from './facebook.svg';
import logoLinkedin from './linkedin.svg';
import logoTwitter from './twitter.svg';
import logoYoutube from './youtube.svg';

import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './components/route/Navbar';

import Accueil from './components/Accueil';
import Centrex from './components/Centrex';
import Mobile from './components/Mobile';
import MultiCompte from './components/MultiCompte';

function App() {

  return (
    <BrowserRouter>
      <div className="row">
        <nav className="navbar">
            <div className="container-fluid">
                <div className="navbar-header">
                    <span className="navbar-brand" title="LINKT">Administration pannel - LINKT</span>
                    <div className="selector-navabar">
                        <div className="navbar-user-dropdown pull-left">
                          <i className="fa fa-user" aria-hidden="true"></i>
                          <a href="https://extranet.linkt.fr/login" target="_blank" rel="noopener noreferrer" className="hidden-xs m-r-10">
                              Extranet Prod
                          </a>
                          <i className="fa fa-arrow-circle-right" aria-hidden="true"></i>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        <div className="col-2 leftColumn sidebar">
          <div className="image">      
              <a className="legal" href="/">
                <img src={logo} alt="logo" />
              </a>
              <div className="version text-center">
                  <b>Version: </b> alpha 0.1
              </div>
             </div>
          <Navbar />
          <div className="reseaux-sociaux">
              <p className="text-center m-b-15">Suivez-nous</p>
              <div className="text-center">
                  <a href="https://www.linkedin.com/company/linkt" rel="noopener noreferrer" className="liens" title="Linkedin" target="_blank">
                      <img src={ logoLinkedin } alt="Linkedin" />
                  </a>
                  <a href="https://twitter.com/LinktByAltitude" rel="noopener noreferrer" className="liens" title="Twitter" target="_blank">
                      <img src={ logoTwitter } alt="Twitter" />
                  </a>
                  <a href="https://www.facebook.com/LinktByAltitude" rel="noopener noreferrer" className="liens" title="Facebook" target="_blank">
                      <img src={ logoFacebook } alt="Facebook" />
                  </a>
                  <a href="https://www.youtube.com/channel/UC3S3sEKpB40DWRgSexTGICA" rel="noopener noreferrer" className="liens" title="Youtube" target="_blank">
                      <img src={ logoYoutube } alt="Youtube" />
                  </a>
              </div>
          </div>
        </div>
        <div className="rightColumn">
          <div className="App">
            <header className="App-header">
              <Route exact path="/" component={Accueil} />
            </header>
              <Route path="/centrex" component={Centrex} />
              <Route path="/mobile" component={Mobile} />
              <Route path="/multiCompte" component={MultiCompte} />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;