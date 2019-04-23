import React, { Component } from 'react';
import ReactDOM from 'react-dom';

let data = [
    {'title':'No Coding',
    'img':require('./images/background1.jpg'),
    'content': 'Mobirise is an easy website builder - just drop site elements to your page, add content and style it to look the way you like.'
    },
    {'title':'Mobile Friendly',
    'img':require('./images/background2.jpg'),
    'content': 'All sites you make with Mobirise are mobile-friendly. You dont have to create a special mobile version of your site.'
    },
    {'title':'Unique Styles',
    'img':require('./images/background3.jpg'),
    'content': 'Mobirise is an easy website builder - just drop site elements to your page, add content and style it to look the way you like.'
    },
    {'title':'Unlimited Sites',
    'img':require('./images/background4.jpg'),
    'content': 'Mobirise is an easy website builder - just drop site elements to your page, add content and style it to look the way you like.'
    },
    {'title':'No Coding',
    'img':require('./images/background5.jpg'),
    'content': 'Mobirise is an easy website builder - just drop site elements to your page, add content and style it to look the way you like.'
    }
]
function Story(){
    return (<div className="media-container-row">{data.map(item => <div className="card p-3 col-12 col-md-6 my-col">
    <div className="card-wrapper">
    <div className="card-img"><img src={item.img} alt="Mobirise" /></div>
    <div className="card-box">
    <h4 className="card-title pb-3 mbr-fonts-style display-7">{item.title}</h4>
    <p className="mbr-text mbr-fonts-style display-7">{item.content}<br /></p>
    </div></div></div>)}
    </div>);
}

export default Story;