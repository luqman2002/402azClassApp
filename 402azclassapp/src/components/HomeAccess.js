import React, { Component, Fragment } from "react";


export default class Home extends Component{
    render(){
        return(
            <section class="hero is-large is-info">
  <div class="hero-body">


<div class="columns">
  <div class="column"></div>
  <div class="column is-half"><input class="input" type="text" placeholder="Enter Email"></input></div>
  <div class="column"><a class="button" href="/LogInPage">Log in </a></div>
</div>

  </div>
</section>
        );
    }
}