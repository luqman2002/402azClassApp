import react, {Component, component} from 'react';
import logo from './logo.png';


export default class NavBar extends Component{
    render(){
        return(
            <nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="/">
      <img src={logo} alt= "Logo of WebVideo" width="112" height="28"/>
    </a>


    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item" href="/">
        Home
      </a>

      <a class="navbar-item" href="/TvShow">
        Tv Shows
      </a>

      <a class="navbar-item" href="/Movies.js">
        Movies
      </a>

      <a class="navbar-item" href="/About">
        About
      </a>

      
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-primary" href="/SignUp">
            <strong>Sign out</strong>
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>


        );
    }
}