import { Link, NavLink } from "react-router-dom";
import Banner from "../Banner/Banner";

const Navbar = () => {
    return (
        <>

            <div className="dropdown justify-evenly flex items-center py-5">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-56 z-[1] p-2 shadow bg-[#a5c7b5] text-center text-lg text-white rounded-box w-52">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about">Brands</NavLink>
                    <NavLink to="services">Beauty Tips</NavLink>
                    <NavLink to="/gallery">Contact us</NavLink>
                </ul>
                <div className="hidden">
                    <Link to="/"> <img data-aos="zoom-out-left" className="h-[120px] mx-4" src="https://i.ibb.co/B6bFTHh/shop-Logo-removebg-preview.png" alt="" /></Link>
                </div>
                <div className="flex lg:hidden gap-5 items-center">
                    <div className="lg:flex items-center gap-3">
                        <img className="lg:h-[50px] h-[30px]" src="https://i.ibb.co/nP2Y7Y9/user.png" alt="" />
                        <p className="text-sm font-semibold text-[#3b644c]">Name</p>
                    </div>
                    <Link to='/login'> <button className="btn lg:p-2 p-1 bg-[#a5c7b5] text-[#3b644c]">Login</button></Link>
                    <Link to='/register'><button className="btn lg:p-2 p-1 bg-[#a5c7b5] text-[#3b644c]">Register</button></Link>
                </div>
            </div>


            <div className="lg:flex hidden justify-evenly items-center ">
                <div>
                    <img className="lg:h-[150px]" src="https://i.ibb.co/B6bFTHh/shop-Logo-removebg-preview.png" alt="" />
                </div>

                <div>
                    < nav>
                        <ul className="flex lg:text-3xl text-[#3b644c] font-medium gap-10">

                            <li>
                                <Link to='/'>Home</Link>
                            </li>
                            <li>
                                <Link to='/brands'>Brands</Link>
                            </li>
                            <li>
                                <Link to='/addproduct'>Add Product</Link>
                            </li>
                            <li>
                                <Link to='/beautytips'>Beauty Tips</Link>
                            </li>
                            <li>
                                <Link to='/contactus'>Contact us</Link>
                            </li>
                            <li>
                                <Link to='/cart'>Cart</Link>
                            </li>

                        </ul>
                    </nav>
                </div>

                <div className="flex gap-5 items-center">
                    <div className="flex items-center gap-3">
                        <img className="h-[50px] rounded-full" src="https://i.ibb.co/nP2Y7Y9/user.png" alt="" />
                        <p className="text-xl text-[#3b644c] lg:font-bold">Name</p>
                    </div>
                    <Link to='/login'>  <button className="btn p-2 text-xl font-bold bg-[#3b644c] text-white">Login</button></Link>
                    <Link to='/register'> <button className="btn p-2 text-xl font-bold bg-[#3b644c] text-white">Register</button></Link>
                </div>
            </div>

        </>
    );
};

export default Navbar;