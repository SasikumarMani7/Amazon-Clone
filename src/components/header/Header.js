import { Search, ShoppingBasket } from '@mui/icons-material';
import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css'
import { useStateValue } from '../../stateProvider/StateProvider';
import { auth } from '../../firebase';

const Header = () => {
    const [{basket,user}] = useStateValue();

    const login = () => {
        if(user){
            auth.signOut();
        }
    }
  return (
    <nav className='header'>
        <Link to='/'>
        <img className='header__logo' 
        src='https://pngimg.com/uploads/amazon/amazon_PNG25.png' alt='logo'/>
        </Link>
        <div className='header__search'>
            <input className='header__searchInput'/>
            <Search className='header__searchIcon'/>
        </div>
        <div className='header__nav'>
            <Link to={!user && '/login'} className='header__link'>
            <div className='header__option' onClick={login}>
                <span className='header__optionLineOne'>Hello {user?.email}</span>
                <span className='header__optionLineTwo'>{user ? "Sign out" : "Sign in"}</span>
            </div></Link>
            <Link to='/' className='header__link'>
            <div className='header__option'>
                <span className='header__optionLineOne'>Return</span>
                <span className='header__optionLineTwo'>& Orders</span>
            </div></Link>
            <Link to='/' className='header__link'>
            <div className='header__option'>
                <span className='header__optionLineOne'>Your</span>
                <span className='header__optionLineTwo'>Prime</span>
            </div></Link>
            <Link to='/checkout' className='header__link'>
            <div className='header__optionBasket'>
                <ShoppingBasket />
                <span className='header__optionLineTwo header__backetCount' >{basket.length}</span>
            </div></Link>
        </div>
    </nav>
  )
}

export default Header;
