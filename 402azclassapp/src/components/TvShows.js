import React, { Component, useState, Fragment, useEffect } from "react";
import {toHaveDisplayValue} from '@testing-library/jest-dom/dist/matchers';


export default class TvShows extends Component{

state ={
    newtvshow: null,
    tvshows: []

}

baseUrl = "https://847pz3ny24.execute-api.us-east-1.amazonaws.com/tvshows";

fetchTvshows = async () => {

    try{
        fetch(this.baseUrl)
        .then(response => response.json())
        .then(data => console.log(data));
    }
    catch(err){
        console.log(`An error has occured:${err}`);
    }
}

componentDidMount = () => {
    this.fetchTvshows();
}

render(){
return(
<section className="section">
<h1 className="title">TvShows</h1>
<h2 className="subtitle">
A simple container to divide your page into <strong>sections</strong>, like the one you're cu
</h2>
</section>

)
}
}
