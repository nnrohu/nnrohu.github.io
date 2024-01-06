import './header.css';

import CTA from './CTA';
import HeaderSocial from './HeaderSocial';
import Images from '../../utils/Images';
import React from 'react';

function Header() {
  return (
    <header>
      <div className='container header__container'>
        <h5>Hello I'm</h5>
        <h1>Rohit Kumar</h1>
        <h5 className='text-light'>Senior Software Engineer</h5>
        <CTA />
        <div className='me'>
          <img src={Images.me} alt='me' />
        </div>

        <a href='#contact' className='scroll__down'>
          Scroll Down
        </a>
        <HeaderSocial />
      </div>
    </header>
  );
}

export default Header;
