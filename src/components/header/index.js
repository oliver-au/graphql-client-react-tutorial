import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css';

const Header = () =>
  <header>
    <div className="row">
      <div className="col-xs">
        <Link to="/" >
          Home
        </Link>
        <Link to="/characterList" >
          Character List
        </Link>
        <Link to="/pets" >
          Pets
        </Link>
      </div>
    </div>
  </header>

export default Header