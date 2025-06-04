import { useState, useEffect } from "react";
import { Link } from "react-router";

import ProfileCard from "../components/ProfileCard";

function Home() {
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        fetch('http://127.0.0.1:3000/user')
            .then(res => {
                if (!res.ok) {
                    throw new Error(`HTTP error. Status: ${res.status}`);
                }
                return res.json();
            }).then(data => setProfile(data)).catch(err => {
                console.error('Failed to fetch user:', err);
            });
    }, []);

    return (
        <main className="h-screen flex items-center justify-center">
            <ProfileCard username={profile ? profile.username : "Login or Register"} path={profile ? "/Profile" : "/Login"} />
            <section className="w-fit text-center">
                <h1 className="text-4xl">Welcome{profile ? `, ${profile.username}` : ""}!</h1>
                {profile ? (
                    <p className="text-3xl">
                        Click on{" "}
                        <Link to="/Profile" aria-label={profile.username}>
                            your profile
                        </Link>{" "}
                        to edit your personal information.
                    </p>
                ) : (
                    <p className="text-3xl">
                        <Link to="/Login" aria-label="Login" className="text-lime-500">Login</Link>
                        {" "} or {" "}
                        <Link to="/Register" aria-label="Register" className="text-teal-500">Register</Link>
                        {" "} now to use all features.
                    </p>
                )}
            </section>
        </main>
    )
}

export default Home