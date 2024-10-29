import PropTypes from 'prop-types';
import './Banner.css'
import { ToastContainer} from 'react-toastify';
const Banner = ({handleRewards}) => {
    return (
        <div className="banner w-11/12 mx-auto mt-10 py-4 px-4 rounded-xl bg-black ">
           <div className=' w-11/12 mx-auto mt-5 rounded-xl pb-5 '>
            <img className=' mx-auto' src='banner-main.png'></img>
            <h1 className='text-xl md:text-3xl text-white font-bold text-center mt-7 mx-auto'>
                Assemble Your Ultimate Dream 11 Cricket Team
            </h1>
            <h4 className='text-white text-lg md:text-xl font-semibold text-center mt-3 mx-auto'>
                Beyond Boundaries Beyond Limits
            </h4>
            <div  onClick={()=>handleRewards(2000000)} className='border-2 border-blue-400 w-64 rounded-xl p-2 mx-auto pr-3 mt-5'>
           
            <h1  className='mx-auto  font-semibold rounded-lg bg-blue-400 w-60 p-4 pl-9 text-lg '>
            Claim Your Rewards
            </h1>
            <ToastContainer />
            </div>
           </div>
        </div>
    );
};
Banner.propTypes={
    handleRewards:PropTypes.func

}

export default Banner;