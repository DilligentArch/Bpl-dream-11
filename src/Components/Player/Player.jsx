import PropTypes from "prop-types";
import { GrUserManager } from "react-icons/gr";
import { CiFlag1 } from "react-icons/ci";

const Player = ({player,handleSelectedPlayers}) => {
    const {name,rating, nationality,type,price,image,batting_style,bowling_style}=player;
    
    return (
        <div className="lg:w-[424px] mx-auto ">
           <div className="w-11/12  border-2 pt-3 mb-2 rounded-xl px-2 ">
           <img className="w-[376px] h-[246px]  rounded-xl mx-auto" src={image} ></img>
           <div className="flex  text-center gap-2">
           <GrUserManager className="mt-2" />
           <h2 className="font-semibold text-lg"> {name}</h2>
           </div>
           <div className="flex justify-between px-1 py-3 border-b-2 ">
            <div className="flex gap-2 mt-1">
            <CiFlag1 className="mt-1" />
            <p className="text-[#13131380]">{nationality}</p>
            </div>
            <div className="bg-slate-200 font-semibold p-1 rounded-lg">
                <p>{type}</p>
            </div>
           </div>
           
           <div className="mx-1 flex justify-between font-bold mt-4 mb-2">
           <p>Rating</p>
            <p>{rating}</p>
           </div>
           <div className="mx-1 flex justify-between font-bold mb-2">
            <p>{batting_style}</p>
            <p>{bowling_style}</p>
           </div>

            <div className="mx-1 flex justify-between mb-2">
                <p className="font-bold">Price: ${price}</p>
                <button onClick={()=>handleSelectedPlayers(player)} className="border-2 px-1 font-semibold rounded-lg">Choose Player</button>
                
            </div>












           </div>

           
        </div>
    );
};

Player.propTypes={
    player:PropTypes.object,
    handleSelectedPlayers:PropTypes.func
}
export default Player;
