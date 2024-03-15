import { FaRegUserCircle } from 'react-icons/fa';
import { CiSearch } from "react-icons/ci";
const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost text-3xl font-bold">Recipe Calories</a>
            </div>
            <div className="navbar-center hidden flex-1 lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Home</a></li>
                    <li><a>Recipes</a></li>
                    <li><a>About</a></li>
                    <li><a>Search</a></li>
                </ul>
            </div>
            <div className="flex-none gap-3">
                <div>
                    <label className="input bg-[#150B2B0D] h-10 rounded-full flex items-center gap-2">
                        <CiSearch size={20}></CiSearch>
                        <input type="text" className="grow" placeholder="Search" />
                    </label>
                </div>
                <button className='bg-[#0BE58A] p-[6px] rounded-full'><FaRegUserCircle size={30}></FaRegUserCircle></button>
            </div>
        </div>
    );
};

export default Navbar;