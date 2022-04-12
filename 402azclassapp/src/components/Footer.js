import React, {Component} from 'react';

export default class Footer extends Component {
    render(){
        return (
            <footer className="footer">
  <div className="content has-text-centered">
  <div className="columns">
  <div className="column">
    Contact us
  </div>
  <div className="column">
    Forum
  </div>
  <a className="column" href="/About">
    About us
  </a>

  <div className="column">
    Cookies
  </div>
</div>
  </div>
</footer>


        );
    }
}