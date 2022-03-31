import React, { Component, Fragment } from "react";

export default class Home extends Component{
    render(){
        return(
            <section class="hero is-large is-info">
  <div class="hero-body">
    <p class="title">
      Large hero
    </p>
    <p class="subtitle">
      Large subtitle
    </p>
  </div>
</section>
        );
    }
}

function MyForm() {
  return (
    <form>
      <label>Enter your name:
        <input type="text" />
      </label>
    </form>
  )
}
ReactDOM.render(<MyForm />, document.getElementById('root'));