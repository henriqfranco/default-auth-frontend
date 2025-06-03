import { Link } from "react-router";

function ProfileCard({ username, path }) {
    return (
        <Link to={path} aria-label={username}>
            <section className="border size-fit flex gap-2 absolute top-5 right-5 rounded-md p-2 items-center bg-white text-black cursor-pointer">
                <img src="public/profile-user.png" alt="User profile picture" className="w-10 select-none" />
                <p className="select-none">{username}</p>
            </section>
        </Link>
    )
}

export default ProfileCard;