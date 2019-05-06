import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Feature from './feature.js';
import Story from './story.js';
import Graph from './graph.js';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
        
    }

    render() {
        return (    <div>
              <section className="engine"><a href="https://mobirise.info/x">css templates</a></section><section className="counters3 counters cid-rjyBkEKRPr" id="counters3-1">
      <div className="container pt-4 mt-2">
        <h2 className="mbr-section-title pb-3 align-center mbr-fonts-style display-2">
          Featured Graphics</h2>
        <div className="media-container-row">
          <div className="media-block m-auto" style={{ width: '53%' }}>
            <div className="mbr-figure">
              <Graph />
              {/* <img src={require('./images/ggra-975x604.png')} alt title /> */}
            </div>
          </div>
          <Feature />
        </div>
      </div>
    </section>
    <section className="mbr-section info1 cid-rjBzpRqMNU" id="info1-4">
      <div className="container">
        <div className="row justify-content-center content-row">
          <div className="media-container-column title col-12 col-lg-7 col-md-6">
            <h2 className="align-left mbr-bold mbr-fonts-style display-2">Recent Stories</h2>
          </div>
          <div className="media-container-column col-12 col-lg-3 col-md-4">
          </div>
        </div>
      </div>
      </section>
    <section className="features17 cid-rjyBH7X7ph" id="features17-2">
      
        <div className="container-fluid"><Story />
        </div>
        </section>
        </div>);
    }
}


export default Home;