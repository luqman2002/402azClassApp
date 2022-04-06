import React, { Component, Fragment } from "react";

export default class LogInPage extends Component{
    render(){
        return(
            <section class="hero is-large is-info">
  <div class="hero-body">

  <p class="title">
        Log In
    </p>


  <div class="columns">
  <div class="column">
  <label class="label"> Email</label>
  <div class="field">
  <p class="control has-icons-left has-icons-right">
    <input class="input" type="email" placeholder="Email"/>
    <span class="icon is-small is-left">
      <i class="fas fa-envelope"></i>
    </span>
    <span class="icon is-small is-right">
      <i class="fas fa-check"></i>
    </span>
  </p>
</div>
  </div>
 
  <div class="column">
   
  </div>
</div>

<div class="columns">
  <div class="column">
  <label class="label"> Password</label>
  <div class="field">
  <p class="control has-icons-left">
    <input class="input" type="password" placeholder="Password"/>
    <span class="icon is-small is-left">
      <i class="fas fa-lock"></i>
    </span>
  </p>
</div>
  </div>
 
  <div class="column">
   
  </div>
</div>


<div class="column"><a class="button" href="/">Log in </a></div>



  </div>
</section>
        );
    }
}