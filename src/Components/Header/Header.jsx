import { NavLink } from "react-router-dom";
import { IoReorderThreeOutline } from "react-icons/io5";
const Header = () => {
       const Link = <>
              <li><NavLink to='/'>Home</NavLink></li>
              <li><NavLink to='/listedBooks'>Listed Books</NavLink></li>
              <li><NavLink to='/pagesToRead'>Pages To Read</NavLink></li>
       </>
       return (
              <div className="navbar bg-base-100 px-0">
                     <div className="navbar-start">
                            <div className="dropdown">
                                   <div tabIndex={0} role="button" className="btn btn-ghost p-0 lg:hidden">
                                          <IoReorderThreeOutline className="text-4xl" />
                                   </div>
                                   <ul
                                          tabIndex={0}
                                          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                          {Link}
                                   </ul>
                            </div>
                            <h2 className="lg:text-3xl font-semibold">Book Vibe</h2>
                     </div>
                     <div className="navbar-center hidden lg:flex">
                            <ul className="menu menu-horizontal px-1">
                                   {Link}
                            </ul>
                     </div>
                     <div className="navbar-end">
                            <a className="btn mr-3">Sing In</a>
                            <a className="btn">Sing Up</a>
                     </div>
              </div>
       );
};

export default Header;