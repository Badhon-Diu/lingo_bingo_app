import { useContext } from "react";

import { AuthContext } from "../Context/AuthProvider";

export default function Myprofile() {
  const { userdata, logout } = useContext(AuthContext);
  return (
    <>
      <div className="  flex justify-center my-20">
        <div className="bg-white  shadow-xl rounded-2xl p-8 w-full max-w-md text-center">
          <div className="flex justify-center">
            <img
              id="user-picture"
              src={userdata.photoURL}
              alt="Profile"
              className="rounded-full w-32 h-32 border-4 border-purple-400 shadow-md"
            />
          </div>
          <h2
            id="user-name"
            className="text-2xl font-semibold text-gray-800 mt-4"
          >
            {userdata.displayName}
          </h2>
          <p id="user-email" className="text-gray-500 mb-4">
            {userdata.email}
          </p>
          <div className="text-left mt-6 space-y-2">
            <p className="text-gray-700">
              <span className="font-semibold">Google ID:</span>{" "}
              <span id="user-id " className="text-red-500">
                {userdata.uid}
              </span>
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Locale:</span>{" "}
              <span id="user-locale">En</span>
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Verified:</span>{" "}
              <span id="user-verified">
                {userdata.emailVerified ? "Yes" : "NO"}
              </span>
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Phone Number:</span>{" "}
              <span id="user-verified">
                {userdata.phoneNumber ? userdata.phoneNumber : "016133412344"}
              </span>
            </p>
          </div>
          <button
            onClick={logout}
            className="mt-6 bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-6 rounded-xl transition"
          >
            Logout
          </button>
        </div>
      </div>
    </>
  );
}
