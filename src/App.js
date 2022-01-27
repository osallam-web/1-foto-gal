import logo from './logo.svg';
// Importaed the 6 images from a folder I created 'src/Photos'
import rom from './Photos/rom.jpg';
import rogers from './Photos/rogers-center.jpg';
import oldHall from './Photos/old-city-hall.jpg';
import cityHall from './Photos/new-city-hall.jpg';
import skyLine from './Photos/city-skyline.jpg';
import cnTower from './Photos/cn-tower.jpg';
import './App.css';
import { useState } from 'react';

function App() {
  const images = [
    {image: logo, desc: 'logo', title: 'logo'},
    {skyLine : logo, desc: 'logo', title: 'logo'},
    {cnTower : logo, desc: 'logo', title: 'logo'}
    {rom : logo, desc: 'logo', title: 'logo'},
    {oldHall : logo, desc: 'logo', title: 'logo'},
    {rogers : logo, desc: 'logo', title: 'logo'}, 
    {cityHall : logo, desc: 'logo', title: 'logo'},  
    ];
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
          images.map(image => {
            return
              <div>
              <h2>{image.title}</h2>
              <img src={image.image} alt="logo" onClick={()=>setSelectedImage(image.image)} />
              </div>
              )
        })
      </section>
      <div id='overlay' style={{visibility: selectedImage ? 'visible': 'hidden'}}>
        <h1><a class="close" onClick={ ()=>setSelectedImage(null) }>X</a></h1>
        <img src={selectedImage} />
      </div>
    </div>
  );
}

export default App;
