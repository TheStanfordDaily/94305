import React, { Component } from 'react';
import ReactDOM from 'react-dom';

let data = [
    {'code':'@94305'}
];

function MyPosCode(){
    return <div>{data.map(item => <h1>
        {item.code}
    </h1>)}
    </div>;
}

export default MyPosCode;

