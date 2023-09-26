import Navbar from './components/navbar';
import Counter from './components/counter';
import Appliance from './components/appliance';
import './App.css';
import Carousel from './components/carousel';
import Controldevice from "./components/controldevice";
import Features from './components/features';
import Devices from './components/devices';

import { BrowserRouter as Main} from "react-router-dom";


function App() {
  return (
    <><Main>
    <Navbar/>
      <Counter/>
      <Appliance/>
      <Carousel/>
      <Controldevice/>
      <Features/>
      <Devices/>

    </Main>
    </>
  );
}

export default App;
