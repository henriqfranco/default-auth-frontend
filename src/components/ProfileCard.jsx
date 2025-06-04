import { Link } from "react-router";
import { useState } from "react";

import { FaArrowDown } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { GrUserNew } from "react-icons/gr";
import { MdLogin } from "react-icons/md";

function ProfileCard({ username }) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleCardClick = () => {
        setIsDropdownOpen(!isDropdownOpen);
    }

    return (
        <div className="absolute top-5 right-5 flex flex-col gap-3">
            <section onClick={handleCardClick} className="border border-white size-fit flex gap-2 rounded-md p-2 items-center bg-transparent text-white cursor-pointer">
                <FaUserCircle className="text-4xl" />
                <p className="select-none">{username}</p>
                <FaArrowDown className={`${isDropdownOpen ? '' : 'animate-bounce'} ${isDropdownOpen ? 'rotate-180' : ''} transition-all`} />
            </section>
            <section className={`border border-white ${isDropdownOpen ? 'flex' : 'hidden'} flex-col gap-2 rounded-md p-2 bg-transparent text-white cursor-pointer`}>
                <Link to="/Login" className="flex items-center gap-1"><MdLogin />Login</Link>
                <Link to="/Register" className="flex items-center gap-1"><GrUserNew />Register</Link>
            </section>
        </div>
    )
}

export default ProfileCard;