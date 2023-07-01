import React, { useEffect, useState } from "react";
const ProfilePage = () => {
    const [userData, serUserData] = useState(null);
    useEffect(() => {
        fetchUserData();
    }, []);
    const fetchUserData = async () => {
        try {
            const response = await fetch('/api/user');
            const data = await response.json();
            setUserData(data);
        }
        catch (error) {
            console.error("Error fetching user data:", error);
        }
    }
    if (!userData) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>Profile</h2>
            <p>Username: {userData.username}</p>
            <p>Roll No: {userData.rollNo}</p>
            <p>Publications: {userData.publications}</p>
        </div>
    );
};

export default ProfilePage;
