import logo from './logo.svg';
import rom from './Photos/rom.jpg';
import rogers from './Photos/rogers-center.jpg';
import oldHall from './Photos/old-city-hall.jpg';
import cityHall from './Photos/new-city-hall.jpg';
import skyLine from './Photos/city-skyline.jpg';
import cnTower from './Photos/cn-tower.jpg';
import './App.css';
import { useState } from 'react';

function App() {
  const images = [rom, rogers, oldHall, cityHall, skyLine, cnTower];
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          The City of Toronto
        </p>
        <p>Historical Sites & More</p>
      </header>
      <section class="grid">
        {
          images.map(image => <img src={image} alt="logo" onClick={()=>setSelectedImage(image)} />)
        }
      </section>
      <div id='overlay' style={{visibility: selectedImage ? 'visible': 'hidden'}}>
        <h1><a class="close" onClick={ ()=>setSelectedImage(null) }>X</a></h1>
        <img src={selectedImage} />
      </div>
    </div>
  );
}

export default App;
