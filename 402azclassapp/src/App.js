import logo from './logo.svg';
import './App.css';
import react, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import TvShows from './components/TvShows';
import SnowFallPage from './components/SnowFallPage';
import TheFlashPage from './components/TheFlashPage';
import LoginPage from './components/LogInPage';
import SignUp from './components/SignUp';
import TvShowAdmin from './components/TvShowAdmin';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { AmplifyProvider } from '@aws-amplify/ui-react';

function App({ isPassedToWithAuthenticator, signOut, user }) {
  if (!isPassedToWithAuthenticator) {
    throw new Error(`isPassedToWithAuthenticator was not provided`);
  }
    return (
      <AmplifyProvider>
      <div className="App">
        <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/tvshows" element={<TvShows/>}/>
          <Route path="/snowfallpage" element={<SnowFallPage/>}/>
          <Route path="/theflashpage" element={<TheFlashPage/>}/>
          <Route path="/loginpage" element={<LoginPage/>}/>
          <Route path="/SignUp" element={<SignUp/>}/>
          <Route path="/tvshowadmin" element={<TvShowAdmin/>}/>
        </Routes>
        <Footer />
        </Router>
   
      </div>
      </AmplifyProvider>
      );

  }

  export default withAuthenticator(App);

  export async function getStaticProps() {
    return {
      props: {
        isPassedToWithAuthenticator: true,
      },
    };
  }
