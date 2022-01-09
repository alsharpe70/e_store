import React from 'react'
import './Header.css';
import logo from './images/logo.png';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Link} from 'react-router-dom';
import { useStateValue } from './StateProvider';
// import EntryPage from './signIn';


function Header() {
    const [{ basket }, dispatch] = useStateValue()
    return (
        <div className="header">
        <Link to="/">
            <img className="header_icon" src={logo} alt="logo-img"/>
        </Link>

            <div className="header_search">
                <input className="header_searchInput"  type="text"/>
                <div className='searchBtn'>
                    <SearchIcon className="header_searchIcon"/>
                </div>
            </div>

            <div className="header_nav">
                <div className="header_option">
                
                    <span className="option">
                        <Link to="/signUp">Sign In</Link>
                    </span>

                </div>
                <div className="basket_icon">
                    <Link to="/checkout">
                        <ShoppingCartIcon style={{color: '#fff'}}/>
                    </Link>
                    <span className="header_option option">{basket?.length}</span>
                </div>
            </div>
           
        </div>
    )
}

export default Header