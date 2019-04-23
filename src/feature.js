import React, { Component } from 'react';
import ReactDOM from 'react-dom';

let data = [
    {'name':'Feature1',
    'img': "https://www.fpaceforum.com/forum/picture.php?albumid=1019&pictureid=4555",
    'content': 'Mobirise give you the freedom to develop as many websites as you like.'
    },
    {'name':'Feature2',
    'img': "https://www.fpaceforum.com/forum/picture.php?albumid=1019&pictureid=4555",
    'content': 'Choose from the large selection of latest pre-made blocks.'
    },
    {'name':'Feature3',
    'img': "https://www.fpaceforum.com/forum/picture.php?albumid=1019&pictureid=4555",
    'content': 'One of Bootstraps big point is responsiveness'
    },
]

function Feature(){
    return (<div className="cards-block">{data.map(item => <div className="cards-container">
        <div className="card px-3 align-left col-12">
            <div className="panel-item p-4 d-flex align-items-center">
            <div className="">
                <img src={item.img} />
            </div>
            <div className="card-text">
            <h4 className="mbr-content-title mbr-bold mbr-fonts-style display-7">{item.name}</h4>
    <p className="mbr-content-text mbr-fonts-style display-7">{item.content}</p>
    </div></div></div></div>)}
    </div>);
}

export default Feature;