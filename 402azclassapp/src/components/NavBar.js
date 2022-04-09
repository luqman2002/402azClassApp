import react, {Component, component} from 'react';
import logo from './logo.png';


export default class NavBar extends Component{
    render(){
        return(
            <nav className="navbar" role="navigation" aria-label="main navigation">
  <div className="navbar-brand">
    <a className="navbar-item" href="/">
      <img src={logo} alt= "Logo of WebVideo" width="112" height="28"/>
    </a>


    <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" className="navbar-menu">
    <div className="navbar-start">
      <a className="navbar-item" href="/">
        Home
      </a>

      <a className="navbar-item" href="/TvShows">
        Tv Shows
      </a>


      <a className="navbar-item" href="/TvShowAdmin">
        Tv Show Admin
      </a>

      <a className="navbar-item" href="/Movies.js">
        Movies
      </a>

      <a className="navbar-item" href="/About">
        About
      </a>

      
    </div>

    <div className="navbar-end">
      <div className="navbar-item">
        <div className="buttons">
          <a className="button is-primary" href="/SignUp">
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