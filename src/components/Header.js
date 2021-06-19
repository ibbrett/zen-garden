import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ProfileIcon from '../images/ProfileIcon';
import { Context } from '../store/store';

const Header = () => {

  // get state vars
  const [ state ] = useContext(Context);
  const logo = state.site.logoImage;
  const title = state.site.title;
  const userFirstName = state.profile.firstName;
  const welcome = `Welcome ${userFirstName}`;

  // return header component
  return (
      <header>
        <div className='logo'><Link to='/'><img src={logo} /></Link></div>
        <div className='label'>{title}</div>
        <div className='account'>
          <Link to='/profile'>
            <span className='welcome-text'>{welcome}</span>
            <span className='welcome-icon'><ProfileIcon /></span>
          </Link>
        </div>
      </header>
  );
};

export default Header;
