import './App.css';
import {Home} from './components/home/Home';
import {About} from './components/about/About';
import { Portfolio } from './components/portfolio/Portfolio';
import { Resume } from './components/Resume';
import { Contact } from './components/contact/Contact';
import {Navbar} from './components/navbar/navbar';
import { Component } from 'react';

class App extends Component {
  render(){
    return (
      <div className="App">
        <Navbar/>
        <Home/>
        <About/>
        <Portfolio/>
        <Resume/>
        <Contact/>
        
      </div>
    );
  }
}
 

export default App;
