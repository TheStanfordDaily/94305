import React, { Component } from 'react';
import ReactDOM from 'react-dom';

let data = [
    {'title':'Good graph',
    'imglink':require('./images/ggra-975x604.png'),
    'caption': 'caption:Mobirise is an easy website'
    },
]

function Graph(){
    return (<div>{data.map(item => <div>
    <div><img src={item.imglink} alt="Mobirise" /></div>
    <div><h4>{item.caption}</h4>
    </div></div>)}
    </div>);
}

export default Graph;