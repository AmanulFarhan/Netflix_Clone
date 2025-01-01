import React from 'react'
import './App.css'
import NavBar from "./components/NavBar/NavBar";
import {originals, action, comedy, romance, doc, horror} from './urls';
import Banner from './components/Banner/Banner';
import RawPost from './components/RawPost/RawPost';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className='App'>
      <NavBar/>
      <Banner/>
      <RawPost url={originals} title='Netflix Originals'/>
      <RawPost url={action} title='Action' isSmall />
      <RawPost url={horror} title='US Horror Movies' isSmall/>
      <RawPost url={romance} title='Romantic TV Shows' isSmall />
      <RawPost url={comedy} title='Comedy Movies' isSmall/>
      <RawPost url={doc} title='Documentaries' isSmall />
      <Footer/>
    </div>
  );
}

export default App;
