

import PropTypes from 'prop-types';

import Navbar from '../Navbar/Navbar';

const Header = ({coin}) => {
    

    return (
        <div className="py-3 sticky top-0 w-full backdrop-filter backdrop-blur-lg bg-opacity-90 bg-sky-50 max-w-screen-2xl mx-auto">
      
       <Navbar coin={coin}></Navbar>
       
      
    </div>
    );
};
Header.propTypes={
    
    coin:PropTypes.number
}
export default Header;