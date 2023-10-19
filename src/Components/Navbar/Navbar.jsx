import { Link, NavLink } from "react-router-dom";

import { useContext } from "react";
import { AuthProvider } from "../AuthContributor/AuthContibutor";

const Navbar = () => {

    const { user, userLogOut } = useContext(AuthProvider);

    const handleLogOut = () => {
        userLogOut()
            .then(() => console.log("You logged out successfully"))
            .catch(error => console.error(error))
    }

    return (
        <>

            <div className="bg-[#a5c7b5]">
                <div className="flex">
                    <div className="dropdown flex items-center ">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-56 z-[1] p-2 shadow bg-[#a5c7b5]  text-center text-lg text-white rounded-box w-32">
                            <NavLink to="/">Home</NavLink>
                            <NavLink to='/brands'>Brands</NavLink>
                            <NavLink to='/addproduct'>Add Product</NavLink>
                            <NavLink to='/beautytips'>Beauty Tips</NavLink>
                            <NavLink to='/contactus'>Contact us</NavLink>
                            <NavLink to='/cart'>Cart</NavLink>

                        </ul>
                    
                    </div>

                    <div className="flex gap-5 lg:hidden items-center">
                        <div className="flex items-center gap-2">
                            <p className="font-bold text-[#3b644c]">Entice</p>

                            <div className="">
                                {user ? <img className="h-[40px] rounded-full" src={user.photoURL} alt="" /> : " "}
                            </div>
                            <p className="text-sm text-[#3b644c] font-semibold lg:font-bold">
                                {
                                    user && <span>{user.displayName}</span>
                                }
                            </p>
                        </div>
                        <div className="">
                            {
                                user ? " " : <div className="flex gap-5 mx-3">
                                    <Link to='/login'>  <button className="lg:p-2  p-1 rounded-lg text-xl font-bold bg-[#3b644c] text-white hover:bg-slate-600">Login</button></Link>
                                    <Link to='/register'> <button className="lg:p-2 p-1 rounded-lg text-xl font-bold bg-[#3b644c] hover:bg-slate-600 text-white">Register</button></Link>
                                </div>
                            }

                            {
                                user ? <button onClick={handleLogOut} className="lg:p-2 p-1 rounded-lg text-xm font-bold bg-[#3b644c] hover:bg-slate-600 text-white">SignOut</button> : " "
                            }
                        </div>
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

                            <div>
                                {user ? <img className="h-[50px] rounded-full" src={user.photoURL} alt="" /> : " "}
                            </div>
                            <p className="text-xl text-[#3b644c] lg:font-bold">
                                {
                                    user && <span>{user.displayName}</span>
                                }
                            </p>
                        </div>
                        {
                            user ? " " : <div>
                                <Link to='/login'>  <button className="btn p-2 text-xl font-bold bg-[#3b644c] text-white hover:bg-slate-600">Login</button></Link>
                                <Link to='/register'> <button className="btn p-2 text-xl font-bold bg-[#3b644c] hover:bg-slate-600 text-white">Register</button></Link>
                            </div>
                        }

                        {
                            user ? <button onClick={handleLogOut} className="btn p-2 text-xl font-bold bg-[#3b644c] hover:bg-slate-600 text-white">SignOut</button> : " "
                        }
                    </div>
                </div>

            </div>
        </>
    );
};

export default Navbar;