import React, { Component, Fragment } from "react";

export default class SnowFallPage extends Component {
    render(){
        return(
            <section class="hero is-large is-info">
            <div class="hero-body">
                <h1 class="title">SnowFall </h1>
                <h2 class="subtitle">Season 1 Episode 1</h2>


                <figure class="image is-16by9">
  <iframe class="has-ratio" width="640" height="360" src="https://www.youtube.com/embed/0yCoLNmhJWM" frameborder="0" allowfullscreen></iframe>
</figure>



                <article class="panel is-primary">
  <p class="panel-heading">
    Filter
  </p>
  <p class="panel-tabs">
    <a class="is-active">Season 1</a>
    <a>season 2</a>
    <a>season 3</a>
    <a>Season 4</a>
    <a>season 5</a>
  </p>
  <div class="panel-block">
    <p class="control has-icons-left">
      <input class="input is-primary" type="text" placeholder="Search"/>
      <span class="icon is-left">
        <i class="fas fa-search" aria-hidden="true"></i>
      </span>
    </p>
  </div>
  <a class="panel-block is-active">
    <span class="panel-icon">
      <i class="fas fa-book" aria-hidden="true"></i>
    </span>
    Episode 1
  </a>
  <a class="panel-block">
    <span class="panel-icon">
      <i class="fas fa-book" aria-hidden="true"></i>
    </span>
    Episode 2
  </a>
  <a class="panel-block">
    <span class="panel-icon">
      <i class="fas fa-book" aria-hidden="true"></i>
    </span>
    Episode 3
  </a>
  <a class="panel-block">
    <span class="panel-icon">
      <i class="fas fa-book" aria-hidden="true"></i>
    </span>
    Episode 4
  </a>
</article>
          
            </div>
          </section>
                  );
              }
          }