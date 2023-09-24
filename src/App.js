import Navbar from './components/navbar';
import Counter from './components/counter';
import './App.css';
import Carousel from './components/carousel';
import Controldevice from "./components/controldevice";
import { BrowserRouter as Main} from "react-router-dom";
import Features from './components/features';
import Devices from './components/devices';

function App() {
  return (
    <><Main>
    <Navbar/>
      <Counter/>
      <Carousel/>
      <Controldevice/>
      <Features/>
      <Devices/>

    </Main>
    </>
  );
}

export default App;
