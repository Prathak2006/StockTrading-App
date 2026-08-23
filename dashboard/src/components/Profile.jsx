import { useEffect, useState } from "react";
import axios from "axios";

function Profile() {
    const [user, setUser] = useState(null);
    const [isProfileDropdownOpen, setIsProfileDropdownOpen] =
        useState(false);

    useEffect(() => {
        const getUser = async () => {
            try {
                const { data } = await axios.get(
                    `${import.meta.env.VITE_BACKEND_URL}/api/profile`,
                    {
                        withCredentials: true,
                    }
                );

                setUser(data);
            } catch (error) {
                console.log(error);
            }
        };

        getUser();
    }, []);


    const handleProfileClick = () => {
        setIsProfileDropdownOpen(!isProfileDropdownOpen);
    };


    const handleLogout = async () => {
        try {
            await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/logout`, {
                method: "POST",
                credentials: "include",
            });

            window.location.href = `${import.meta.env.VITE_FRONTEND_URL}`;
        } catch (err) {
            console.log(err);
        }
    };


    return (
        <>
            {user && (
                <>
                    <div
                        className="profile"
                        onClick={handleProfileClick}
                    >
                        <div className="avatar">
                            {user.name
                                .split(" ")
                                .slice(0, 2)
                                .map((word) => word[0])
                                .join("")
                                .toUpperCase()}
                        </div>
                        <p className="username">{user.name}</p>
                    </div>
                    {isProfileDropdownOpen && (



                        <div className="profile-dropdown">

                            <button
                                className="close-profile"
                                onClick={() => setIsProfileDropdownOpen(false)}
                            >
                                X
                            </button>
                            <div className="profile-info">
                                <div className="avatar large">
                                    {user.name
                                        .split(" ")
                                        .slice(0, 2)
                                        .map((word) => word[0])
                                        .join("")
                                        .toUpperCase()}</div>

                                <div>
                                    <p className="profile-name">{user.name}</p>
                                    <p className="profile-email">  {user.email}</p>
                                </div>
                            </div>

                            <hr />

                            <button className="logout-btn"
                                onClick={handleLogout}>
                                Logout
                            </button>
                        </div>
                    )}
                </>
            )}
        </>
    );
}

export default Profile;