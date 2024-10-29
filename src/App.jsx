import { useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Playerlists from './Components/PlayerLists/Playerlists';
import SelectedPlayers from './Components/SelectedPlayers/SelectedPlayers';
import Footer from './Components/Footer/Footer';
import FloaatingWindow from './Components/FlotingWindow/FloaatingWindow';
import {  toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import Banner from './Components/Banner/Banner';

function App() {
  const [coin, setCoins] = useState(0);
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [isActive, setIsActive] = useState(true);

  const handleState = (flag) => {
    setIsActive(flag);
  };

  const handleDelet = (id) => {
    
    const remainingPlayer = selectedPlayers.filter((player) => player.id !== id);
    setSelectedPlayers(remainingPlayer);
    toast.info('You have deleted a plaayer',{
      position: "top-center",
     theme:'colored'
    })
  };

  const handleSelectedPlayers = (p) => {
    const unique = selectedPlayers.find((uniquePlayer) => uniquePlayer.id === p.id);

    if (unique) {
      toast.error('Player already exists in the team',{
        position: "top-center",
        theme:'colored'
      });
    } else if (selectedPlayers.length < 6 && p.price <= coin) {
      setCoins(coin - p.price);
      toast.success('New player added',{
        position: "top-center",
       theme:'colored'
      });
      setSelectedPlayers([...selectedPlayers, p]);
    } else if (p.price > coin) {
      toast.warn("You don't have enough balance",{
        position: "top-center",
       theme:'colored'
      });
    } else {
      toast.warn('Maximum player limit reached',{
        position: "top-center",
       theme:'colored'
      });
    }
  };

  const handleRewards = (coins) => {
    setCoins(coin + coins);
    toast.success('Congratulations! Coins added.',{
      position: "top-center",
      theme:'colored'
    });
  };

  return (
    <>
          
      <header>
        <Header handleRewards={handleRewards} coin={coin} />
        <Banner handleRewards={handleRewards}>

        </Banner>
      </header>

      <main>
        {isActive ? (
          <Playerlists
            handleSelectedPlayers={handleSelectedPlayers}
            selectedPlayers={selectedPlayers}
            handleState={handleState}
          ></Playerlists>
        ) : (
          <SelectedPlayers
            selectedPlayers={selectedPlayers}
            handleDelet={handleDelet}
            handleState={handleState}
          ></SelectedPlayers>
          
        )}
      </main>
      


      <footer>
       
        <FloaatingWindow></FloaatingWindow>
        
        <Footer ></Footer>
      </footer>
    </>
  );
}

export default App;
