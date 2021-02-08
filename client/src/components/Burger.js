import React from 'react';
import { bool, func } from 'prop-types';
import { StyledBurger } from '../styled';

const Burger = ({ open, setOpen, ...props }) => {
  
  const isExpanded = open ? true : false;
  
  return (
    <StyledBurger aria-label="Toggle menu" aria-expanded={isExpanded} open={open} onClick={() => setOpen(!open)} {...props}>
      <span style={{ boxShadow: '1px 1px #888888'}} />
      <span style={{ boxShadow: '1px 1px #888888'}} />
      <span style={{ boxShadow: '1px 1px #888888'}} />
    </StyledBurger>
  )
}

Burger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

export default Burger;