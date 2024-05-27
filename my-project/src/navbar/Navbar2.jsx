import {  faCartShopping,    faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LogOut from '../login page/LogOut';
import {}from 'react'
import { Link } from 'react-router-dom';

import { useState } from 'react';

function Navbar2(props) {
 
  const [userLogin, setUserLogin]=useState(false)
  return (
   <nav>
<div className="relative w-full bg-white">
    <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
      <div className="inline-flex  items-center">

    <img className='h-16 w-16 text-center text-4xl ' src="src/images/logo2.jpg" alt="" />
  <span className='font-bold text-3xl text-gray-700'>SEED<span className='text-red-400'>PLOW</span></span>
    </div>
    <div className="items-center justify-end col-span-2 md:col-span-4 lg:col-span-6">
      <div className="flex items-center justify-end gap-8">
      <button onClick={()=> setUserLogin(true)} className=' text-3xl '>
        <Link to="/SignUp" className="text-3xl text-gray-700 hover:text-red-600">
          <FontAwesomeIcon icon={faUser}/>
        </Link>
        <Link to='/SignIn'></Link></button>
       
       <button onClick={()=>setUserLogin(false)}> <LogOut/></button>

  
    
      
        <button className='text-3xl text-gray-700 px-8'>
        <Link to='/Cart' className="text-3xl hover:text-red-600">
           <FontAwesomeIcon icon={faCartShopping} /><sup>{props.count}</sup>
        </Link>
        
        </button>
      </div>
    </div>
  </div>
</div>
</nav>

      
  )
}

export default Navbar2;