import PropTypes from "prop-types";
import { SiBitcoinsv } from "react-icons/si";

const Navbar = ({coin}) => {
    return (
        <div className="flex justify-around mt-10 ">
            <img src="logo.png"></img>
            <ul className="flex gap-4 ">
                <li className="mt-3 hidden lg:block text-[#131313b3]" >Home</li>
                <li className="mt-3 hidden lg:block text-[#131313b3]">Fixture</li>
                <li className="mt-3 hidden lg:block text-[#131313b3]">Teams</li>
                <li className="mt-3 hidden lg:block text-[#131313b3]">Scedules</li>
                <li className="h-14 border-2 rounded-lg lg:ml-7  pt-3 px-4 font-semibold text-sm lg:text-lg ">
                    <div className="flex gap-3">
                    {coin} coins <SiBitcoinsv className="text-orange-400 mt-2 " /> 
                    </div>
                </li>
                
            </ul>
        </div>
    );
};

Navbar.propTypes={
    coin:PropTypes.number
}

export default Navbar;