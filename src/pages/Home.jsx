import { useState, useEffect } from "react";
import { Link } from "react-router";

import ProfileCard from "../components/ProfileCard";

function Home() {
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            fetch('http://127.0.0.1:3000/user', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }).then(res => {
                if (!res.ok) {
                    throw new Error('Not authenticated');
                }
                return res.json();
            }).then(data => {
                const userProfile = Array.isArray(data) ? data[0] : data;
                setProfile(userProfile);
                setLoading(false);
            }).catch(error => {
                console.error('Failed to fetch user: ', error);
                setLoading(false);
            });
        } else {
            setLoading(false);
        }
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    };

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