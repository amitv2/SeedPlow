import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"
import { faHome } from '@fortawesome/free-solid-svg-icons';

export default function Nav() {
  const [isToggleOpen, setIsToggleOpen] = useState(false)

  return (
    <>
      {/*<!-- Component: Navbar with Topbar --> */}
      {/*<!-- Top bar --> */}

      {/*<!-- Header --> */}
      <header className=" relative z-20 max-w-full  bg-green-600 shadow-lg shadow-slate-700/5 after:absolute after:top-full after:left-0 after:z-10 after:block after:h-px after:w-full after:bg-green-600 lg:backdrop-blur-sm lg:after:hidden">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-4  sm:px-6  lg:px-12 ">
       
        
          
            
            {/*      <!-- Mobile trigger --> */}
            <button
              className={`relative order-10 block h-10 w-10 self-center lg:hidden
                ${
                  isToggleOpen
                    ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(3)]:w-0 [&_span:nth-child(2)]:-rotate-45 "
                    : ""
                }
              `}
              onClick={() => setIsToggleOpen(!isToggleOpen)}
              aria-expanded={isToggleOpen ? "true" : "false"}
              aria-label="Toggle navigation"
            >
              <div className="absolute top-1/2 left-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                ></span>
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-6 transform rounded-full bg-slate-900 transition duration-300"
                ></span>
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                ></span>
              </div>
            </button>
            {/*      <!-- Navigation links --> */}
            
        
            <ul
              role="menubar"
              aria-label="Select page"
              className={`absolute top-0 left-0 z-[-1] h-[28.5rem] w-full justify-center overflow-hidden  overflow-y-auto overscroll-contain bg-gray-700 px-8 pb-12 pt-24 font-medium transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0  lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:bg-white/0 lg:px-0 lg:py-0  lg:pt-0 lg:opacity-100 ${
                isToggleOpen
                  ? "visible opacity-100 backdrop-blur-sm"
                  : "invisible opacity-0"
              }`}
            >
              
              
              <li>
            <Link
              to="/Home"
              className="inline-flex items-center text-xl font-lgbold text-white hover:text-red-600 "
            >
             <FontAwesomeIcon icon={faHome}/>
              
            </Link>
          </li>
          <li>
            <Link
              to="/Vegetable"
              className="inline-flex items-center text-lg font-lgbold text-white hover:text-red-600 mx-4"
            >
              Vegetable Seeds
              
            </Link>
          </li>
              
          <li>
            <Link
              to="/Exotic"
              className="inline-flex items-center text-lg font-lgbold text-white hover:text-red-600 mx-4"
            >
              Exotic Seeds
              
            </Link>
          </li>
          <li>
            <Link
              to="/Herbal"
              className="inline-flex items-center text-lg font-lgbold text-white hover:text-red-600 mx-4"
            >
             Herbal Seeds
              
            </Link>
          </li>
          <li>
            <Link
              to="/Flower"
              className="inline-flex items-center text-lg font-lgbold text-white hover:text-red-600 mx-4"
            >
              Flower Seeds
              
            </Link>
          </li>
          <li>
            <Link
              to="/MicroGreen"
              className="inline-flex items-center text-lg font-lgbold text-white hover:text-red-600 mx-4"
            >
              Microgreens
              
            </Link>
            </li>
            <li>
            <Link 
              to="/GrowBags"
              className="inline-flex items-center text-lg font-lgbold text-white hover:text-red-600 mx-4"
            >
              Grow Bags
              
            </Link>
          </li>
          <li>
            <Link
              to="/FruitSeed"
              className="inline-flex items-center text-lg font-lgbold text-white hover:text-red-600 mx-4"
            >
             Fruit Seeds
              
            </Link>
          </li>

          </ul>
            
         
        
        </div>
      </header>
      {/*<!-- End Navbar with Topbar--> */}
    </>
  )
}
