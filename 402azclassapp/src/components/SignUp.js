import React, { Component, Fragment } from "react";

export default class LogInPage extends Component{
    render(){
        return(
            <section class="hero is-large is-info">
  <div class="hero-body">

  <p class="title">Sign Up</p>


  <div class="columns">
  <div class="column">
  <label class="label"> First Name</label>
  <div class="field">
  <p class="control has-icons-left has-icons-right">
    <input class="input" type="FirstName" placeholder="First Name"/>
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
  <label class="label">Last Name</label>
  <div class="field">
  <p class="control has-icons-left">
    <input class="input" type="LastName" placeholder="Last Name"/>
    <span class="icon is-small is-left">
      <i class="fas fa-lock"></i>
    </span>
  </p>
</div>
  </div>
 
  <div class="column">
   
  </div>
</div>



<div class="columns">
  <div class="column">
  <label class="label">Date of Birth</label>
  <div class="field">
  <p class="control has-icons-left">
    <input class="input" type="D.O.B" placeholder="Date of Birth"/>
    <span class="icon is-small is-left">
      <i class="fas fa-lock"></i>
    </span>
  </p>
</div>
  </div>
 
  <div class="column">
   
  </div>
</div>

<div class="columns">
  <div class="column">
  <label class="label">Email</label>
  <div class="field">
  <p class="control has-icons-left">
    <input class="input" type="Email" placeholder="Email"/>
    <span class="icon is-small is-left">
      <i class="fas fa-lock"></i>
    </span>
  </p>
</div>
  </div>
 
  <div class="column">
   
  </div>
</div>


<div class="columns">
  <div class="column">
  <label class="label">Password</label>
  <div class="field">
  <p class="control has-icons-left">
    <input class="input" type="Password" placeholder="Password"/>
    <span class="icon is-small is-left">
      <i class="fas fa-lock"></i>
    </span>
  </p>
</div>
  </div>
 
  <div class="column">
   
  </div>
</div>

<div class="column"><a class="button" href="/">SignUp </a></div>



  </div>
</section>
        );
    }
}