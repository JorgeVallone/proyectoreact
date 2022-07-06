import React from 'react';
import CartWidget from '../CartWidget/Index';
import './NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = () =>
{

    return(
       
        <nav className='navFather'>
            <ul className='navUnorderedList'>
           <li><Link to='/'>Home</Link></li>
           <li><Link to='/category/electronics'>Electronics</Link></li>
           <li><Link to='/category/jewelery'>Jewelery</Link></li>
           <li><Link to="/category/women's clothing">Women's clothing</Link></li>
          <li><Link to="/category/men's clothing">Men's clothing</Link></li>  
          <li className ='cartWidgetImage'>
          <CartWidget/> 
          </li>
          
            </ul>
        </nav>

    )

}
export default NavBar