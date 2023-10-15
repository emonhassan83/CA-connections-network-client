import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { RiArrowDownSLine } from "react-icons/ri";
import { IoLogoDropbox } from 'react-icons/io';


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="sticky top-0 z-10 bg-transparent backdrop-blur-xl max-w-[2520px] xl:px-28 md:px-10 sm:px-2 w-full px-4  mx-auto h-[85px] ">
      <div className="relative flex items-center justify-between">
        <Link
          to="/"
          aria-label=""
          title=""
          className="inline-flex items-center"
        >
          <div className="flex items-center justify-center gap-1 w-40 h-20">
          <IoLogoDropbox className="text-3xl mt-2"/>
            <h2 className="text-xl font-bold">logoipsum</h2>
          </div>
        </Link>
        <ul className="items-center hidden space-x-8 lg:flex text-black font-medium">
          <li>
            <NavLink
              to="/"
              aria-label="Home"
              title="Home"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              <p className="flex items-center">
                Solutions
                <RiArrowDownSLine className="primary_color mt-1 text-lg" />
              </p>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              aria-label=""
              title=""
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              <p className="flex items-center">
                Features
                <RiArrowDownSLine className="primary_color mt-1 text-lg" />
              </p>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              aria-label=""
              title=""
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              <p className="flex items-center">
                About
                <RiArrowDownSLine className="primary_color mt-1 text-lg" />
              </p>
            </NavLink>
          </li>
        </ul>

        <div className="flex items-center justify-center gap-2">
          <button className="btn btn-outline text-[#0076CE] hover:bg-[#0465ae] hidden lg:block px-5  hover:border-none my-4 uppercase">
            Login
          </button>
          <button className="btn hidden lg:block  px-5 btn-color hover:border-none my-4 uppercase">
            Register
          </button>
        </div>

        <div className="lg:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
            onClick={() => setIsMenuOpen(true)}
          >
            <svg className="w-5 text-black" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              />
              <path
                fill="currentColor"
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
              />
              <path
                fill="currentColor"
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
              />
            </svg>
          </button>
          {isMenuOpen && (
            <div className="absolute z-10 top-0 left-0 w-full">
              <div className="p-5 bg-white border rounded shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <Link
                      to="/"
                      aria-label=""
                      title=""
                      className="inline-flex items-center"
                    >
                      <div className="flex items-center justify-center -ml-2 h-14">
                      <IoLogoDropbox className="text-3xl mt-2"/>
                        <h4 className=" font-bold">logoipsum</h4>
                      </div>
                    </Link>
                  </div>
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <nav>
                  <ul className="space-y-4">
                    <li>
                      <Link
                        to="/"
                        aria-label=""
                        title=""
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        <p className="flex items-center">
                          Solutions
                          <RiArrowDownSLine className="primary_color mt-1 text-lg" />
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/"
                        aria-label=""
                        title=""
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        <p className="flex items-center">
                          Features
                          <RiArrowDownSLine className="primary_color mt-1 text-lg" />
                        </p>
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/"
                        aria-label=""
                        title=""
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        <p className="flex items-center">
                          About
                          <RiArrowDownSLine className="primary_color mt-1 text-lg" />
                        </p>
                      </Link>
                    </li>

                    <li>
                      <Link to="/">
                        <button className="btn btn-outline text-[#0076CE] hover:bg-[#0465ae] btn-sm hover:border-none -ml-2 uppercase">
                          Login
                        </button>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <button className="btn btn-outline btn-sm btn-color hover:border-none -ml-2 uppercase">
                          Register
                        </button>
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
