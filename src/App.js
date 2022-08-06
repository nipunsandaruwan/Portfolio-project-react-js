import './App.css';
import  Navbar  from './Components/Navbar/Navbar';
import Intro from './Components/Intro/Intro';
import Myskills from './Components/My Skils/Myskills';
import Portfolio from './Components/Portfolio/Portfolio';
import ContactMe from './Components/Contact Me/ContactMe';
import Footer from './Components/Footer/Footer';

import { themeContext } from './Context';
import { useContext } from 'react';

function App() {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div 
      className="App"
      style={{
        background : darkMode ? 'black' : 'white',
        color : darkMode ? 'white' : 'black'
      }} 
    >
      <Navbar />
      <Intro />
      <Myskills />
      <Portfolio />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
