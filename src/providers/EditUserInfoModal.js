import React from "react";
import { useState } from "react";
import { editProfile } from "../../../PMIG-Backend-1/controllers/api/v1/users_apis";
const EditUserInfoModal = ({ user, onClose }) => {
    const [name, setName] = useState(user.name);
    const [about, setAbout] = useState(user.about);

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleAboutChange = (event) => {
        setAbout(event.target.value);
    };

    const handleSave = () => {
        // Call an API function to update the user's information
        editProfile(user.id, { name, about })
            .then(() => {
                // Handle successful update
                onClose();
            })
            .catch((error) => {
                // Handle error
                console.error('Error updating user info:', error);
            });
    };

    const handleCancel = () => {
        onClose();
    };

    return (
        <div className="modal">
            <h2>Edit User Info</h2>
            <form>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" value={name} onChange={handleNameChange} />
                </div>
                <div>
                    <label htmlFor="about">About:</label>
                    <textarea id="about" value={about} onChange={handleAboutChange} />
                </div>
            </form>
            <div>
                <button onClick={handleSave}>Save</button>
                <button onClick={handleCancel}>Cancel</button>
            </div>
        </div>
    );
};

export default EditUserInfoModal;