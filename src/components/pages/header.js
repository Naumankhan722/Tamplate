import React, { useState } from 'react';
import '../../App.css';
import Dropdown from '../Dropdown';
import { IoMdArrowDropdown, IoMdColorPalette, IoMdPlanet, IoMdSearch } from 'react-icons/io';

export default function Header() {
  
  const [showDropdown, setClick] = useState(false);

  const handleClick = () => setClick(!showDropdown);


  return (
    <>
      <div  className='head'>
        <div className='leftHead'>
          <h4>Dashboard</h4>
          <IoMdColorPalette/> 
          <h4 className='space'>
            <IoMdPlanet/>
            <IoMdArrowDropdown/>
          </h4>
          <div className='search'>
            <IoMdSearch/>
            <h4>Search</h4>
          </div>
        </div>
        <div className='rightHead'>
          <div className='space fifty'>
            <h4>Acount</h4>
            <h4 className='space point' onClick={handleClick}>
              Dropdown
              <IoMdArrowDropdown/>
              {showDropdown ? <Dropdown/> : null}
            </h4>
            <h4>Log Out</h4>
          </div>
        </div>
      </div>
    </>
  );
}
