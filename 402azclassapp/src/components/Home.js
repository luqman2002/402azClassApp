import React, { Component, Fragment } from "react";

// the homepage is where the user is first allocated to when accessing the webapp //


export default class Home extends Component{
    render(){
        return(
            <section class="hero is-large is-info">
  <div class="hero-body">


<div className="columns">
  <div className="column"></div>
  <div className="column is-half"><input className="input" type="text" placeholder="Enter Email"></input></div>
  <div className="column"><a className="button" href="/LogInPage">Log in </a></div>
</div>

  </div>
</section>
        );
    }
}

 



