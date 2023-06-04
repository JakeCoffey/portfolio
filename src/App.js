import './App.css';
import './comps/links.js'
import Links from './comps/links.js';
import headshot from './comps/imgs/headshot.jpeg'

function App() {
  return (
    <div className='container'>
      <img src={headshot} alt='Headshot'/>
    <h1>Jake Coffey</h1>
    <h2>IT Professional</h2>
    <h3>About me:</h3>    
    <p>Iam a self motivated IT professonal with a wide variety of interests and expiences in the space, ranging from network & system administration to User support 
      and help desk. Ontop of those I also have an interest and expeirence in development both web and local, cyber security and cloud migrations.Below you will find 
      different links where youll be able to see some things ive worked on & what im currently wokring on.I'm always interested in learning new technologes and skills 
      soplease reach out at Contact@jakecoffey.com if you'd like to work with me. </p>
      <Links></Links>
    </div>
    
  );
}

export default App;