import React from 'react';
import './Nav.css';

const Nav = () => {
  return ( 
	<div className='nav'>
		<a href='/' className='home'>
			<img src='https://ih1.redbubble.net/image.2379195894.2752/raf,750x1000,075,t,8DB3D2:e6f0370482.jpg'/>
			MeMe Boi
		</a>
		<ul>
			<li><a href='/lab'> LAB </a></li>
			<li><a href='/log'> LOG </a></li>
		</ul>
	</div>
  )
} 

export default Nav;