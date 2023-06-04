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
    <p>I am a self-motivated IT professional with a wide variety of interests and experiences in the field. 
      My expertise ranges from network and system administration to user support and help desk. In addition 
      to these areas, I also have a strong interest and experience in web and local development, cybersecurity,
      and cloud migrations. Below, you will find various links where you can see some of the projects I have 
      worked on and what I am currently working on. I am always eager to learn new technologies and skills, 
      so please feel free to reach out to me at Contact@jakecoffey.com if you would like to collaborate with me.</p>
      <Links></Links>
    </div>
    
  );
}

export default App;