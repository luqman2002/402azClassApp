import React, { Component, Fragment } from "react";
import SnowFall from './snow fall wallpaper.jpg';
import Flash from './the flash wallpaper.jpg';
import Stranger from './147-1475821_stranger-things-season-3-poster-characters-8k-stranger.jpg';

export default class TvShow extends Component{
    render(){
        return(
            <section class="hero is-large is-info">
  <div class="hero-body">
    <p class="title">
      Tv Shows
    </p>


    <div class="columns">
  <div class="column">
    Snowfall
  </div>
  <div class="column">
    Second column
  </div>
  <div class="column">
    Third column
  </div>
  <div class="column">
    Fourth column
  </div>
</div>



    <div class="columns">
  <div class="column">
  <figure class="image is-128x128">
  <img src={SnowFall}/>
</figure>
  </div>
  <div class="column">
  <figure class="image is-128x128">
  <img src={Flash}/>
</figure>
  </div>
  <div class="column">
  <figure class="image is-128x128">
  <img src={Stranger}/>
</figure>
  </div>
  <div class="column">
    Fourth column
  </div>
</div>

  </div>
</section>
        );
    }
}    
