import logo from './logo.svg';
import './App.css';
import react, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import TvShow from './components/TvShow';
import SnowFallPage from './components/SnowFallPage';
import TheFlashPage from './components/TheFlashPage';
import LoginPage from './components/LogInPage';
import SignUp from './components/SignUp';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

function App() {
    return (
      <Authenticator>
      <div className="App">
        <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/tvshow" element={<TvShow/>}/>
          <Route path="/snowfallpage" element={<SnowFallPage/>}/>
          <Route path="/theflashpage" element={<TheFlashPage/>}/>
          <Route path="/loginpage" element={<LoginPage/>}/>
          <Route path="/SignUp" element={<SignUp/>}/>
        </Routes>
        <Footer />
        </Router>
   
      </div>
      </Authenticator>
      );

  }

export default App;
