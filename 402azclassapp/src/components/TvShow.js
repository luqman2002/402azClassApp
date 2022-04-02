import React, { Component, Fragment } from "react";
import SnowFall from './snow fall wallpaper.jpg';
import Flash from './the flash wallpaper.jpg';
import Stranger from './147-1475821_stranger-things-season-3-poster-characters-8k-stranger.jpg';
import Wallpaper from './tv show wallpaper.jpg';
import Orange from './tv shows images/oranhge is the new black.jpg';

export default class TvShow extends Component{
    render(){
        return(
            <section class="hero is-large is-info">
  <div class="hero-body">

  <p class="title">
      Tv Shows
    </p>

  <figure class="image is-square">
  <img src={Wallpaper}/>
</figure>

<div class="dropdown">
  <div class="dropdown-trigger">
    <button class="button" aria-haspopup="true" aria-controls="dropdown-menu3">
      <span>Click me</span>
      <span class="icon is-small">
        <i class="fas fa-angle-down" aria-hidden="true"></i>
      </span>
    </button>
  </div>
  <div class="dropdown-menu" id="dropdown-menu3" role="menu">
    <div class="dropdown-content">
      <a href="#" class="dropdown-item">
        Overview
      </a>
      <a href="#" class="dropdown-item">
        Modifiers
      </a>
      <a href="#" class="dropdown-item">
        Grid
      </a>
      <a href="#" class="dropdown-item">
        Form
      </a>
      <a href="#" class="dropdown-item">
        Elements
      </a>
      <a href="#" class="dropdown-item">
        Components
      </a>
      <a href="#" class="dropdown-item">
        Layout
      </a>
      <hr class="dropdown-divider"/>
      <a href="#" class="dropdown-item">
        More
      </a>
    </div>
  </div>
</div>

    <div class="columns">
  <div class="column">
    Snowfall
  </div>
  <div class="column">
    The Flah
  </div>
  <div class="column">
    Stranger Things
  </div>
  <div class="column">
    Orange is the new black
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
  <figure class="image is-128x128">
  <img src={Orange}/>
</figure>
  </div>
</div>

  </div>
</section>
        );
    }
}    
