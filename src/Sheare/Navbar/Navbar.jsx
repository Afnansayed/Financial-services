import { NavLink } from "react-router-dom";


const Navbar = () => {

     const haldleLogout = () => {
        localStorage.removeItem('access-token');
     }
      const navLink = <>
                {/* 01 */}
                <NavLink className={({ isActive }) => isActive ? 'font-bold border-[3px] py-2 px-5 border-[rgb(5,172,108)] rounded-lg mr-3 text-[rgb(5,172,108)] ' : 'text-[rgb(5,172,108)] mr-2 font-semibold p-2'} to='/'><li>Home</li></NavLink>
                {/* 02 */}
                <NavLink className={({ isActive }) => isActive ? 'font-bold border-[3px] py-2 px-5 border-[rgb(5,172,108)] rounded-lg mr-3 text-[rgb(5,172,108)] ' : 'text-[rgb(5,172,108)] mr-2 font-semibold p-2'} to='/register'><li>Register</li></NavLink>
                {/* 03 */}
                <NavLink className={({ isActive }) => isActive ? 'font-bold border-[3px] py-2 px-5 border-[rgb(5,172,108)] rounded-lg mr-3 text-[rgb(5,172,108)] ' : 'text-[rgb(5,172,108)] mr-2 font-semibold p-2'} to='/login'><li>LogIn</li></NavLink>
                
                
      </>
      const navForAuthentication = <>
             {/* 01 */}
             <NavLink className={({ isActive }) => isActive ? 'font-bold border-[3px] py-2 px-5 border-[rgb(5,172,108)] rounded-lg mr-3 text-[rgb(5,172,108)] ' : 'text-[rgb(5,172,108)] mr-2 font-semibold p-2'} to='/userRegister'><li>User Account</li></NavLink>
             {/* 02 */}
             <NavLink className={({ isActive }) => isActive ? 'font-bold border-[3px] py-2 px-5 border-[rgb(5,172,108)] rounded-lg mr-3 text-[rgb(5,172,108)] ' : 'text-[rgb(5,172,108)] mr-2 font-semibold p-2'} to='/agentRegister'><li>Agent Account</li></NavLink>
             {/* 02 */}
             <li><p onClick={haldleLogout} className="text-xl text-[rgb(5,172,108)]">LogOut</p></li>
      </>
    return (
        <div className="navbar bg-base-100 border-2 rounded-xl border-[rgb(5,172,108)]">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {
                            navLink
                        }
                    </ul>
                </div>
                <a className="text-2xl ml-2 font-semibold">Easy<span className="text-[rgb(5,172,108)] text-3xl">Pay</span></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        navLink
                    }
                </ul>
            </div>
             <div className="navbar-end">
                {
                     <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className=" m-1 px-8 py-2 border-2 border-[rgb(5,172,108)]  text-[rgb(5,172,108)] rounded-lg">Create Account</div>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 border-2 border-[rgb(5,172,108)] rounded-box w-52 space-y-2 flex flex-col justify-center items-center">
                            {
                                navForAuthentication
                            }
                        </ul>
                    </div>
                }
                {
                    // <div className="dropdown dropdown-end">
                    //     <div tabIndex={0} role="button" className="avatar"><div className="w-12 rounded-full">
                    //         {/* <img src={user?.photoURL} /> */}
                    //     </div></div>
                    //     <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 space-y-5 flex justify-center items-center ">
                    //         {
                    //             // navForDashboard
                    //         }
                    //     </ul>
                    // </div>
                }
            </div>
            
        </div>
    );
};

export default Navbar;