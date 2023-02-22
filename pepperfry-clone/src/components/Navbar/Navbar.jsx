import React from 'react';
import NavMiddle from './NavbarMiddle';
import WithSubnavigation from './NavbarUpper';
const Navbar = () => {
  return (
    <div>
      <WithSubnavigation/>
      <NavMiddle/>
    </div>
  )
}

export default Navbar;
