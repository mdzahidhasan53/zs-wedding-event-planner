import { Link, NavLink } from "react-router-dom";

const Navbar = () => {

  const navLinks = <>
    <NavLink to="/"><li><a>Home</a></li></NavLink>
    <NavLink to="/about"><li><a>About Us</a></li></NavLink>
    <NavLink to="/services"><li><a>Services</a></li></NavLink>
    <NavLink to="/contact"><li><a>Contact</a></li></NavLink>
    <NavLink to="/register"><li><a>Register</a></li></NavLink>
    <NavLink to="/blog"><li><a>Blog</a></li></NavLink>


  </>
  return (
    <div className="navbar bg-[#f8ecec]">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {navLinks}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-3xl font-arimo font-semibold text-[#747474] subpixel-antialiased">ZS Wedding Planner</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navLinks}
        </ul>
      </div>
      <div className="navbar-end gap-2">
        <div className="avatar">
          <div className="w-12 rounded-full">
            <img src="https://i.postimg.cc/gjBvqdS1/avatar.png" />
          </div>
        </div>
        <Link to="/login"><a className="btn normal-case">Login</a></Link>
      </div>
    </div>
  );
};

export default Navbar;