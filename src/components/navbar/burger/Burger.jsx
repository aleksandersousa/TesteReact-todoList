import { useState } from 'react';
import Sidebar from '../sidebar/Sidebar';
import { StyledBurger } from './Styles';

function Burger() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Sidebar open={open} />
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
    </>
  );
}

export default Burger;
