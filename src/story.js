import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link, Route } from "react-router-dom";
import Article from './Article.js';

class Story extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    async componentDidMount() {
        let response = await fetch("https://www.stanforddaily.com/wp-json/wp/v2/posts?_embed")
            .then(e => e.json())
        this.setState({ data: response })
    }

    render() {
        return (<div className="media-container-row">
                {this.state.data.map(item =>

                    <div className="card p-3 col-12 col-md-6 my-col">
                        <div className="card-wrapper">
                            <div className="card-img">
                                <img src={item._embedded['wp:featuredmedia'] && item._embedded['wp:featuredmedia'].length ? item._embedded['wp:featuredmedia'][0].link : ""} alt="Mobirise" /></div>
                            <div className="card-box">
                                <h4 className="card-title pb-3 mbr-fonts-style display-7" dangerouslySetInnerHTML={{ __html: item.title.rendered }} />
                                <p>Published date:{item.date}</p>
                                <a href={item.link}>Read More</a><br />
                                <Link to={item.slug}>Go to the article page</Link>
                                <p className="mbr-text mbr-fonts-style display-7" dangerouslySetInnerHTML={{ __html: item.excerpt.rendered }} />
                            </div></div></div>
                )}
        </div>);
    }
}


// let data = [
//     {
//         'title': 'story1',
//         'img': require('./images/mbr-432x432.jpg'),
//         'content': 'Mobirise is an easy website'
//     },
//     {
//         'title': 'story2',
//         'img': require('./images/mbr-432x324.jpg'),
//         'content': "All sites you make with Mobirise are mobile-friendly. You don't have to"
//     },
//     {
//         'title': 'story3',
//         'img': require('./images/mbr-432x270.jpg'),
//         'content': 'Mobirise offers many site blocks in several themes, and though these blocks are pre-made, they are.'
//     },
//     {
//         'title': 'story4',
//         'img': require('./images/mbr-432x243.jpg'),
//         'content': 'Mobirise gives you the freedom to develop as many websites as you like given the fact that it is a desktop app.'
//     },
//     {
//         'title': 'story5',
//         'img': require('./images/mbr-432x243.jpg'),
//         'content': 'Mobirise is an easy website builder - just drop site elements to your page, add content and style it to look the way you like.'
//     }
// ]

export default Story;