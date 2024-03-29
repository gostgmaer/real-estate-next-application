// pages/profile.js
import ImageUpload from "@/components/global/fields/ImageUpload";
import { get, patch } from "@/lib/helper/network";
import { notifySuccess, notifyerror } from "@/lib/notify/notice";
import React, { useEffect, useState } from "react";

const Profile = ({ props }) => {
  const [user, setUser] = useState(props.data.result);
  const [editMode, setEditMode] = useState(false);
  const [editedUser, setEditedUser] = useState(props.data.result);
  const [file, setFile] = useState(props.data.result.profilePicture);

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleCancelClick = () => {
    setEditMode(false);
    setEditedUser(user);
  };

  const handleSaveClick = async () => {
    console.log(user);
    const body = {
      firstName: editedUser.firstName,
      lastName: editedUser.lastName,
      profilePicture: file,
      phoneNumber: editedUser.phoneNumber,
      dateOfBirth: editedUser.dateOfBirth,
    };
    const request = await patch(
      "/authentication/user/current/profile/update",
      body,
      user._id
    );
    if (request.status == "OK") {
      notifySuccess(request.message, 2000);
    } else {
      notifyerror(request.message, 2000);
    }
    setEditMode(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  return (
    <div className="  max-w-7xl m-auto rounded-lg ">
      <div className="flex w-full justify-between bg-white p-5 rounded-3xl">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          {props.session.user.name}
        </h2>
        {editMode ? (
          <button
            onClick={handleCancelClick}
            className="bg-gray-500 text-white px-4 py-2 rounded-md"
          >
            Cancel
          </button>
        ) : (
          <button
            onClick={handleEditClick}
            className="bg-blue-500 text-white  px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            Edit profile
          </button>
        )}
      </div>

      <div className=" mx-auto mt-8 p-5 bg-gray-50 grid rounded-lg">
        <div className="  w-5/6 mx-auto mt-8 grid  gap-3 sm:grid-cols-2 col-span-full">
          <div className="col-span-full">
            <label
              className={`text-sm font-medium text-gray-700 mb-2 ${
                editMode ? "block" : "flex w-full items-center gap-5"
              }`}
            >
              Email Address:
              <input
                type="text"
                name="email"
                value={editedUser?.email}
                onChange={handleInputChange}
                className={` ${
                  editMode
                    ? "w-full mt-1 p-2 border rounded-md"
                    : "bg-transparent border-none "
                }`}
                disabled={true}
              />
            </label>
          </div>

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
          <div className="sm:col-span-1">
            <label
              className={`text-sm font-medium text-gray-700 mb-2 ${
                editMode ? "block" : "flex w-full items-center gap-5"
              }`}
            >
              Last Name:
              <input
                type="text"
                name="lastName"
                value={editedUser?.lastName}
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
          <div className="sm:col-span-1">
            <label
              className={`text-sm font-medium text-gray-700 mb-2 ${
                editMode ? "block" : "flex w-full items-center gap-5"
              }`}
            >
              Date fo Birth:
              <input
                type="date"
                name="dateOfBirth"
                value={editedUser?.dateOfBirth}
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
          <div className="sm:col-span-1">
            <label
              className={`text-sm font-medium text-gray-700 mb-2 ${
                editMode ? "block" : "flex w-full items-center gap-5"
              }`}
            >
              Phone Number:
              <input
                type="text"
                name="phoneNumber"
                value={editedUser?.phoneNumber}
                placeholder="+910000000000"
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
          <div className="col-span-full">
            <label
              className={`text-sm font-medium text-gray-700 mb-2 ${
                editMode ? "block" : "flex w-full items-center gap-5"
              }`}
            >
              {!editMode && editedUser?.profilePicture && (
                <div className=" flex flex-col gap-5">
                  <span>Profile Image</span>
                  <img
                    src={user.profilePicture}
                    alt={user.firstName}
                    className=" w-40 h-40 rounded-md"
                  />
                </div>
              )}
              {editMode && (
                <ImageUpload
                  imagePreview={file}
                  setImagePreview={setFile}
                  label={"Profile Picture"}
                />
              )}
            </label>
          </div>
        </div>

        <div className="col-span-full  w-2/6 mx-auto mt-20">
          {editMode && (
            <button
              type="submit"
              onClick={handleSaveClick}
              className="bg-blue-500 text-white m-auto px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 w-full"
            >
              Save Profile
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
