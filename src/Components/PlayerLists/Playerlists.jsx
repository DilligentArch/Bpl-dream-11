
import { useEffect, useState } from "react";
import Player from "../Player/Player";
import PropTypes from "prop-types";



const Playerlists = ({handleSelectedPlayers,selectedPlayers,handleState}) => {

    const[player,setPlayers]=useState([]);



    useEffect(()=>{
        fetch('players.json')
        .then(res=>res.json())
        .then(data=>setPlayers(data))
    },[])
    

    return (
        <div className="w-11/12 mx-auto mt-7 ">
            <div className="flex items-center justify-between">
            <h1 className="font-bold text-sm md:text-4xl mb-5">Available Players</h1>
            <div className="ml-20" >
                <button  onClick={()=>handleState(true)}  className="mr-5 w-52 font-semibold rounded-lg bg-blue-400 border-2  p-5 px-8">Available</button>
                <button  onClick={()=>handleState(false)} className="mr-5 w-52 font-semibold rounded-lg border-2   p-5">Selected Players({selectedPlayers.length})</button>
            </div>
            </div>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-20 gap-y-5 p-4">
            {
                player.map(player=>
                    <Player key={player.id} player={player} handleSelectedPlayers={handleSelectedPlayers} ></Player>
                )
            }
           </div>
        </div>
    );
};
Playerlists.propTypes={
    handleSelectedPlayers:PropTypes.func,
    selectedPlayers:PropTypes.object.isRequired,
    handleState:PropTypes.func.isRequired
    
}
export default Playerlists;