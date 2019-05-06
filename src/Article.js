import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Article extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }

  }
  async componentDidMount() {
    let link = "https://www.stanforddaily.com/wp-json/wp/v2/posts?slug=" + this.props.match.params.id + "&_embed";
    let response = await fetch(link)
      .then(e => e.json())
    this.setState({ data: response })
    console.log(this.state.data)
  }

  render() {
    // return ( <div>
    //   <h1>Title</h1>
    //   <div>
    //     <img></img>
    //     <span></span>
    //     </div>
    //     <p>{this.props.match.params.id}Lorem ipsum dolor sit amet, consectetur 
    //     adipiscing elit, sed do eiusmod 
    //       tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    //        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
    //        consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
    //        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
    //        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim 
    //        id est laborum.
    //        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
    //       tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    //        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
    //        consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
    //        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
    //        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim 
    //        id est laborum.
    //        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
    //       tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    //        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
    //        consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
    //        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
    //        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim 
    //        id est laborum.
    //        </p>
    // </div>);
    return (<div className="media-container-row"> 
      {this.state.data.map(item =>
        <div className="card p-3 col-12 col-md-6 my-col">
              <br />
    <br /><br /><br /><br /><br /><br /><br />
        <div className="card-box">
        <h2 className="card-title pb-3 mbr-fonts-style display-7" dangerouslySetInnerHTML={{ __html: item.title.rendered }} />
        <p>Published date:{item.date}</p>
        <div className="card-img">
        <img src={item._embedded['wp:featuredmedia'] && item._embedded['wp:featuredmedia'].length ? item._embedded['wp:featuredmedia'][0].link : ""} alt="Mobirise" />
        </div>
        <p className="mbr-text mbr-fonts-style display-7" dangerouslySetInnerHTML={{ __html: item.content.rendered }} />
      </div></div>)}
 </div>);
  }
}


export default Article;