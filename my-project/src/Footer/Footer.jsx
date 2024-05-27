import {  faArrowCircleRight, faEnvelope,   faPhone,  } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import {} from 'react'

function Footer() {
  return (
    <footer className="w-full bg-gray-700">
  <div className="mx-auto flex max-w-6xl flex-col items-start space-x-8 md:flex-row">
    <div className="w-full px-4 md:w-1/3 lg:px-0">
      <h1 className="max-w-sm text-white mt-1 text-xl font-bold">Get in touch</h1>
      <form action="" className="mt-4 inline-flex w-full items-center md:w-3/4">
      <ul className='relative w-full'>
      <li>
      <h2 className='text-lg text-cyan-400 space-x-1'>
      <FontAwesomeIcon icon={faEnvelope}/><span className='text-white hover:text-red-600 cursor-pointer'>amitverma8303@gmail.com</span>
      </h2>
      <h2 className='text-cyan-400 text-lg space-x-2 mt-2'><FontAwesomeIcon className='mt-2' icon={faPhone}/><span className='text-white'>+918305632173</span></h2>
         </li>
         <li className='flex mt-1 text-3xl text-cyan-400 space-x-2 '><FontAwesomeIcon className='mt-2' icon={faArrowCircleRight}/>
         <Link to="https://www.facebook.com/profile.php?id=100040423791217&mibextid=ZbWKwL" className='w-12 h-12 rounded-full border-2 p-0.5 bg-cyan-400 hover:bg-blue-500'><img src="src/images/facebook.png" alt="" />
         </Link>
         <a href="https://www.instagram.com/theamitkatiyar?igsh=MWZzZnliYnJocGo2aw==" className='w-12 h-12 rounded-full border-2 p-0.5 ml-3 bg-cyan-400 hover:bg-red-500'><img src="src/images/instagram.png" alt="" />
         </a>
         <a href="" className='w-12 h-12 rounded-full border-2 p-1 ml-3 bg-cyan-400  hover:bg-green-500'><img src="src/images/whatsapp.png" alt="" />
         </a>
         </li>
         </ul> 
      </form>
    </div>
    <div className="mt-8 grid grid-cols-2 gap-6 md:mt-0 lg:w-3/4 lg:grid-cols-3">
      <div className="mb-8 lg:mb-0">
        <p className="mb-3 mt-1 text-xl font-semibold text-white ">Information</p>
        <ul className="flex flex-col space-y-1 text-[13px] font-medium text-white">
          <li className=' hover:text-cyan-400'><a href="#">Refund & Cancellation</a></li>
          <li className=' hover:text-cyan-400'><a href="#">Delivery Information</a></li>
          <li  className='  hover:text-cyan-400'><a href="#">Privacy Policy</a></li>
          <li  className=' hover:text-cyan-400'><a href="#">Terms & Condition</a></li>
        </ul>
      </div>
      <div className="mb-8 lg:mb-0">
        <p className="mb-3 text-xl font-semibold text-white ">Important Link</p>
        <ul className="flex flex-col space-y-1 text-[13px] font-medium text-white">
          <li><Link to="/Home">Home</Link></li>
          <li><Link to="/vegetable">Vegetable Seeds</Link></li>
          <li><Link to="/Exotic">Exotic Seeds</Link></li>
          <li><Link to="/Herbal">Herbal Seeds</Link></li>
          <li><Link to="/Flower">Flower Seeds</Link></li>
          <li><Link to="/Microgreen">Microgreen</Link></li>
          <li><Link to="/GrowBags">Grow Bags</Link></li>
          <li><Link to="/FruitSeed">Fruit Seeds</Link></li>
        </ul>
      </div>
      <div className="mb-8 lg:mb-0">
        <p className="mb-3 text-xl font-semibold text-white ">About Our Store</p>
        <ul className="flex flex-col space-y-1 text-[13px] font-medium text-white">
          <p className='text-balance '>Natura Seeds is a leading seed supplier in India, offering top quality flower and vegetable seeds for your
           home garden. With a wide range of seeds to choose from, Natural seeds has everything you need to grow a beautiful garden. 
          Come visit us today and start growing your dream garden.</p>
        </ul>
      </div>
    </div>
  </div>
  <hr className="my-4" />
  <div className="mx-auto max-w-6xl items-center justify-between px-4 md:flex lg:px-0">
    
    
    <div className="mt-4 md:mt-0">
      <p className="text-lg font-medium text-white">
        © 2024 SEED<span className='text-red-400'>Plow</span>. All rights reserved.
      </p>
    </div>
  </div>
</footer>

  )
}

export default Footer
