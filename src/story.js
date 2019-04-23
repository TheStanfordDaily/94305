import React, { Component } from 'react';
import ReactDOM from 'react-dom';

let data = [
    {
        'title': 'story1',
        'img': require('./images/mbr-432x432.jpg'),
        'content': 'Mobirise is an easy website'
    },
    {
        'title': 'story2',
        'img': require('./images/mbr-432x324.jpg'),
        'content': "All sites you make with Mobirise are mobile-friendly. You don't have to"
    },
    {
        'title': 'story3',
        'img': require('./images/mbr-432x270.jpg'),
        'content': 'Mobirise offers many site blocks in several themes, and though these blocks are pre-made, they are.'
    },
    {
        'title': 'story4',
        'img': require('./images/mbr-432x243.jpg'),
        'content': 'Mobirise gives you the freedom to develop as many websites as you like given the fact that it is a desktop app.'
    },
    {
        'title': 'story5',
        'img': require('./images/mbr-432x243.jpg'),
        'content': 'Mobirise is an easy website builder - just drop site elements to your page, add content and style it to look the way you like.'
    }
]

let data2 = [
    {
        'title': 'No Coding',
        'img': require('./images/background1.jpg'),
        'content': 'Mobirise is an easy website builder - just drop site elements to your page, add content and style it to look the way you like.'
    },
    {
        'title': 'Mobile Friendly',
        'img': require('./images/background2.jpg'),
        'content': 'All sites you make with Mobirise are mobile-friendly. You dont have to create a special mobile version of your site.'
    },
    {
        'title': 'Unique Styles',
        'img': require('./images/background3.jpg'),
        'content': 'Mobirise is an easy website builder - just drop site elements to your page, add content and style it to look the way you like.'
    },
    {
        'title': 'Unlimited Sites',
        'img': require('./images/background4.jpg'),
        'content': 'Mobirise is an easy website builder - just drop site elements to your page, add content and style it to look the way you like.'
    },
    {
        'title': 'No Coding',
        'img': require('./images/background5.jpg'),
        'content': 'Mobirise is an easy website builder - just drop site elements to your page, add content and style it to look the way you like.'
    }
]
function Story() {
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