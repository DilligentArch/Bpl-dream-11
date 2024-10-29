import PropTypes from "prop-types";
import { IoTrashBinOutline } from "react-icons/io5";


const SelectedPlayer = ({ player,handleDelet }) => {
  const {id,name,image, batting_style } = player;


  
  return (
    <div className="flex justify-between items-center border-2 p-3 rounded-lg">
        <div className="flex items-center gap-4 my-4">
      <img className="w-36 h-24 rounded-lg" src={image} alt={name} />
      <div>
        <p className="font-semibold">{name}</p>
        
        <p>{batting_style}</p>
       
      </div>
    </div>
    <div>
    <IoTrashBinOutline onClick={()=>handleDelet(id)} className="text-red-500" />
    </div>
   
    </div>
  );
};

SelectedPlayer.propTypes = {
  player: PropTypes.array.isRequired,
  handleDelet:PropTypes.func.isRequired
};

export default SelectedPlayer;
