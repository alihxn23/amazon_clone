import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {useStateValue} from './StateProvider';
import {auth} from "./firebase.js"

function Header() {
    const [{basket, user}, dispatch] = useStateValue();

    const login = () => {
        if(user){
            auth.signOut();
        }
    }

    return (
        <nav className="header">
            {/* amazon logo */}
            <Link to="/">
                <img
                    src="http://pngimg.com/uploads/amazon/amazon_PNG25.png"
                    className="header__logo"
                    alt="amazon-logo"
                />
            </Link>

            {/* search bar */}
            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <SearchIcon className="header__searchIcon" />
            </div>


            {/* 3 icons */}
            <div className="headerNav">
                {/* link 1 */}
                <Link to={!user && "/login"} className="header__link">
                    <div onClick={login} className="header__option">
                        <span className="header__optionLineOne">Hello {user? user.email: "Moto"}</span>
                        <span className="header__optionLineTwo">{user? "Sign Out" : "Sign In"}</span>
                    </div>
                </Link>
                {/* link 2 */}
                <Link to="/login" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Returns</span>
                        <span className="header__optionLineTwo">& Orders</span>
                    </div>
                </Link>
                {/* link 3 */}
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Your</span>
                        <span className="header__optionLineTwo">Prime</span>
                    </div>
                </Link>
            </div>
            {/* cart icon */}
            <Link to="/checkout" className="header__link">
                <div className="header__optionBasket">
                    <ShoppingBasketIcon/>
                    <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
                </div>
            </Link>
        </nav>
    )
}

export default Header
