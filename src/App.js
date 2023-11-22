import Header from './components/Header/Header'
import MainData from './components/MainData/MainData';
import Navigation from './components/Navigation/Navigation';
import React, {useState} from 'react';
import Income from './components/Income/Income';
import Spendings from './components/Spendings/Spendings';
import { useGlobalContext } from './context/globalContext';


function App() {
  const [active, setActive] = React.useState(1);

  const globalContext = useGlobalContext();
  console.log(globalContext);

  const displayData = () => {
    switch (active) {
      case 1:
        return <MainData />;
      case 2:
        return <Income />;
      case 3:
        return <Spendings />;
      default:
        return <MainData />;
    }
  };

  return (
    <div className="App">
      <Header />
      <div className="hero-data">
        <Navigation active={active} setActive={setActive} />
        {displayData()}
      </div>
    </div>
  );
}

export default App;
