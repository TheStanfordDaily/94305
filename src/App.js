import React, { Component } from 'react';
import './App.css';
import './mobirise/css/mbr-additional.css';
import './mobirise/mobirise-icons.css'
import './bootstrap/css/bootstrap-grid.min.css';
import './bootstrap/css/bootstrap-reboot.min.css';
import './bootstrap/css/bootstrap.min.css';
import './dropdown/css/style.css';
//import './socicon/css/styles.css';
import './tether/tether.min.css';
import './theme/css/style.css';
import MyPosCode from './postcode.js';

import Article from './Article.js';
import { BrowserRouter, Link, Route } from "react-router-dom";
import Home from './home.js';


export default () => (
  // <div className="App">
  //   <header className="App-header">
  //     <img className="App-logo" src="https://user-images.githubusercontent.com/1689183/55673023-25239a00-5857-11e9-9699-5f2d0ab365cf.png" />
  //     <p>
  //       Edit <code>src/App.js</code> and save to reload.
  //         </p>
  //     <a
  //       className="App-link"
  //       href="https://reactjs.org"
  //       target="_blank"
  //       rel="noopener noreferrer"
  //     >
  //       Learn React
  //         </a>
  //     <img src="https://thestanforddaily.github.io/94305/assets/images/stannydaily-122x122.jpg" alt="Mobirise" title=""></img>
  //   </header>
  // </div>

  <div>
    <section className="menu cid-rjyBeAEtup" once="menu" id="menu2-0">
      <nav className="navbar navbar-expand beta-menu navbar-dropdown align-items-center navbar-fixed-top navbar-toggleable-sm">
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <div className="hamburger">
            <span />
            <span />
            <span />
            <span />
          </div>
        </button>
        <div className="menu-logo">
          <div className="navbar-brand">
            <span className="navbar-logo">
              <a href="https://mobirise.co">
                <img src={require('./images/stannydaily-192x192.jpg')} alt="Mobirise" title style={{ height: '5.1rem' }} />
              </a>
            </span>
            <span className="navbar-caption-wrap"><a className="navbar-caption text-black display-1" href="https://mobirise.co"><MyPosCode /></a></span>
          </div>
        </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav nav-dropdown" data-app-modern-menu="true"><li className="nav-item">
          </li>
            <li className="nav-item">
              <a className="nav-link link text-black display-4" href="https://www.stanforddaily.com/about/">
                About Us
                    </a>
            </li></ul>
          <div className="navbar-buttons mbr-section-btn"><a className="btn btn-sm btn-primary display-4" href="tel:+1-234-567-8901">
            <span className="btn-icon mbri-mobile mbr-iconfont mbr-iconfont-btn">
            </span>
            Daily Phone #
                  </a></div>
        </div>
      </nav>
      <div id="myNavbar"></div>
    </section>
    <BrowserRouter>

        <div>
        <Route exact path="/" component={Home} />
        <Route path="/:id" component={Article} />
        </div>
  
    </BrowserRouter>
    <section className="cid-rjBDml6YgH mbr-reveal" id="footer5-5">
      <div className="container">
        <div className="media-container-row">
          <div className="col-md-3">
            <div className="media-wrap">
              <a href="https://mobirise.co/">
                <img src={require('./images/stannydaily-192x192.jpg')} alt="Mobirise" title />
              </a>
            </div>
          </div>
          <div className="col-md-9">
            <p className="mbr-text align-right links mbr-fonts-style display-7">&nbsp;</p>
          </div>
        </div>
        <div className="footer-lower">
          <div className="media-container-row">
            <div className="col-md-12">
              <hr />
            </div>
          </div>
          <div className="media-container-row mbr-white">
            <div className="col-md-6 copyright">
              <p className="mbr-text mbr-fonts-style display-7">
                © Copyright 2019 The Stanford Daily - All Rights Reserved
                    </p>
            </div>
            <div className="col-md-6">
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);
