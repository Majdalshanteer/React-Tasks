import './App.css';

import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Components
import Header from './components/Header';
import InputCard from './components/InputCard';
import WeatherCard from './components/WeatherCard';
// import Footer from './components/Footer';

function App() {

  const [Image, set_Image] = useState("")
  const [Temp, set_Temp] = useState(0)
  const [Tempmax, set_Tempmax] = useState(0)
  const [Tempmin, set_Tempmin] = useState(0)
  const [Pressure, set_Pressure] = useState(0)
  const [Pre, set_Pre] = useState("")
  const [City, set_City] = useState("")
  const [Country, set_Country] = useState("")
  const [Description, set_Description] = useState("")
  const [Wind_Speed, set_Wind_Speed] = useState(0)
  const [Humidity, set_Humidity] = useState(0)


  return (
    <div className="App">
      <Header />
        <Router>
          <Routes>
            <Route path="/City-Weather" element={<InputCard set_Image={set_Image} set_Temp={set_Temp} set_Tempmax={set_Tempmax} set_Tempmin={set_Tempmin} set_City={set_City} set_Country={set_Country} set_Description={set_Description} set_Wind_Speed={set_Wind_Speed} set_Humidity={set_Humidity} set_Pressure={set_Pressure} set_Pre={set_Pre} />} />
            <Route path="/City-Weather/result" element={<WeatherCard Image={Image} Temp={Temp} Tempmax={Tempmax} Tempmin={Tempmin} City={City} Country={Country} Description={Description} Wind_Speed={Wind_Speed} Humidity={Humidity} Pressure={Pressure} Pre={Pre} />} />
          </Routes>
        </Router>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
