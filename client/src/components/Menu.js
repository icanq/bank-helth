import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from '../styled';
import { Link } from 'react-router-dom';
const Menu = ({ open, ...props }) => {
  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;

  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
        <Link to='/' tabIndex={tabIndex}>
          <span aria-hidden='true'>🏠</span>
          Home
        </Link>
        <Link to='/upload' tabIndex={tabIndex}>
          <span aria-hidden='true'>📂</span>
          Upload File
        </Link>
        <Link to='/kinerja' tabIndex={tabIndex}>
          <span aria-hidden='true'>📈</span>
          Lihat Kinerja
        </Link>
    </StyledMenu>
  );
};

Menu.propTypes = {
  open: bool.isRequired,
};

export default Menu;
