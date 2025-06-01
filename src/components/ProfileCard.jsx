function ProfileCard({ username, email }) {
    return (
        <section className="border size-fit flex gap-2 absolute top-5 right-5 rounded-md p-2 items-center bg-white text-black cursor-pointer">
            <img src="/src/assets/profile-user.png" alt="User profile picture" className="w-10 select-none"/>
            <div>
                <p className="select-none">{username}</p>
                <p className="select-none">{email}</p>
            </div>
        </section>
    )
}

export default ProfileCard;