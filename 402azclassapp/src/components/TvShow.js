import React, { Component, useState, Fragment, useEffect } from "react";
import SnowFall from './snow fall wallpaper.jpg';
import Flash from './the flash wallpaper.jpg';
import Stranger from './147-1475821_stranger-things-season-3-poster-characters-8k-stranger.jpg';
import Wallpaper from './tv show wallpaper.jpg';
import Orange from './tv shows images/oranhge is the new black.jpg';


function TvShow(){


const [Tvshows, setTvshows] = useState([]);

const baseUrl = "https://847pz3ny24.execute-api.us-east-1.amazonaws.com/TvShows";

const getTvShows = () => {
  fetch(baseUrl)
  .then((res) => res.json())
  .then((res) => {
    console.log(res.Items)
    setTvshows(res.Items)
  })

} 

useEffect (() => {
  getTvShows()
}, [])


        return(
          <>
            <section className="hero is-large is-info">
              <h1 className="title">Tvshow</h1>
              <h2 className="subtitle">
                A simple container to divide 
              </h2>

            </section>
<h1 className='title '>{JSON.stringifyTvShows}</h1>
</>

        )
}    

export default TvShow;
