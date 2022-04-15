import logo from './logo.svg';
import './App.css';
import react, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import TvShows from './components/TvShows';
import SignUp from './components/SignUp';
import TvShowAdmin from './components/TvShowAdmin';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

// This is the mapping of each page using routes, in the navbar is where they are allocated to each href //

function App(){
    return(
      <div className="App">
        <Router>
          <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/tvshows" element={<TvShows/>}/>
          <Route path="/SignUp" element={<SignUp/>}/>
          <Route path="/tvshowadmin" element={<TvShowAdmin/>}/>
        </Routes>
        <Footer />
        </div>
        </Router>
      </div>
      );
      
    }

  export default withAuthenticator(App);
