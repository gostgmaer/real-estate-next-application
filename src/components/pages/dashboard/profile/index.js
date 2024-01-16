// pages/profile.js
import React, { useEffect, useState } from "react";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [editedUser, setEditedUser] = useState(null);

  useEffect(() => {
    const getUserData = async () => {
      const userData = {
        username: "john_doe",
        email: "john@example.com",
        firstName: "John",
        lastName: "Doe",
        // Add more properties as needed
      };
      setUser(userData);
      setEditedUser(userData);
    };

    getUserData();
  }, []);

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleCancelClick = () => {
    setEditMode(false);
    setEditedUser(user);
  };

  const handleSaveClick = () => {
    // Implement logic to save editedUser to the database
    // For simplicity, let's assume there's a saveUser function
    // that updates the user data in the database

    // saveUser(editedUser);

    // For this example, we'll just switch back to display mode
    setEditMode(false);
    setUser(editedUser);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  return (
    <div className=" bg-white max-w-7xl m-auto rounded-lg p-5">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">
        {user?.username}
      </h2>
      <form className=" mx-auto mt-8 p-5 bg-gray-50 grid rounded-lg">
        <div className="  w-5/6 mx-auto mt-8 grid  gap-3 sm:grid-cols-2 col-span-full">
          <div className="sm:col-span-1">
            <label
              className={`text-sm font-medium text-gray-700 mb-2 ${
                editMode ? "block" : "flex w-full items-center gap-5"
              }`}
            >
              First Name:
              <input
                type="text"
                name="firstName"
                value={editedUser?.firstName}
                onChange={handleInputChange}
                className={` ${
                  editMode
                    ? "w-full mt-1 p-2 border rounded-md"
                    : "bg-transparent border-none "
                }`}
                disabled={!editMode}
              />
            </label>
          </div>

          <div className="col-span-full flex justify-center gap-10 items-center">
            {editMode ? (
              <>
                {" "}
                <button
                  onClick={handleSaveClick}
                  className="bg-blue-500 text-white px-4 py-2 mr-2 rounded-md"
                >
                  Save
                </button>
                <button
                  onClick={handleCancelClick}
                  className="bg-gray-500 text-white px-4 py-2 rounded-md"
                >
                  Cancel
                </button>
              </>
            ) : (
              <button
                onClick={handleEditClick}
                className="bg-blue-500 text-white px-4 py-2  rounded-md"
              >
                Edit
              </button>
            )}
          </div>
        </div>

        <div className="col-span-full  w-2/6 mx-auto mt-20">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 w-full"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
