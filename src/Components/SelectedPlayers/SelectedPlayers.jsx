import PropTypes from "prop-types";
import SelectedPlayer from "../SelectedPlayer/SelectedPlayer";


const SelectedPlayers = ({ selectedPlayers,handleDelet,handleState }) => {

    

  return (
    <div className="w-5/6 mx-auto my-16 ">
     <div className="flex items-center justify-between mb-7">
     <h1 className="font-bold text-sm md:text-4xl mb-5">
        Selected Players({selectedPlayers.length}/6)
      </h1>
      <div className="ml-20" >
                <button onClick={()=>handleState(true)}   className="mr-5 w-52 font-semibold rounded-lg border-2  p-5 px-8">Available</button>
                <button onClick={()=>handleState(false)} className="mr-5 bg-blue-400  w-52 font-semibold rounded-lg border-2   p-5">Selected Players({selectedPlayers.length})</button>
            </div>

     </div>
      <div className="w-11/12 mx-auto ">
        {selectedPlayers.map((player) => (
          <SelectedPlayer key={player.id} player={player} handleDelet={handleDelet} ></SelectedPlayer>
        ))}
      </div>
      <div onClick={()=>handleState(true)} className="border-2 border-purple-500 w-60 mt-7 rounded-xl  py-2">
      <button onClick={()=>handleState(true)} className="ml-1 w-56 font-semibold rounded-lg  bg-blue-400  p-5 px-8">Add more players</button>
        </div>
    </div>
  );
};

SelectedPlayers.propTypes = {
  selectedPlayers: PropTypes.array.isRequired,
  handleDelet:PropTypes.func.isRequired,
  handleState:PropTypes.func.isRequired
};

export default SelectedPlayers;
