import { useState } from "react";
import { BASE_URL } from "../utils/constants";
import axios from "axios";
import { addUser } from "../utils/userSlice";
import UserCard from "./UserCard";
import { useDispatch } from "react-redux";

const EditProfile = ({ user }) => {
  const [firstName, setfirstName] = useState(user.firstName);
  const [lastName, setlastName] = useState(user.lastName);
  const [photoURL, setphotoURL] = useState(user.photoURL);
  const [skills, setskills] = useState(user.skills);
  const [about, setabout] = useState(user.about);
  const [error, seterror] = useState("");
  const dispatch = useDispatch();
  const [toastvisible, settoastvisible] = useState(false);

  const saveProfile = async () => {
    seterror("");
    try {
      const res = await axios.patch(
        BASE_URL + "/profile/edit",
        {
          firstName,
          lastName,
          photoURL,
          skills,
          about,
        },
        { withCredentials: true }
      );
      dispatch(addUser(res.data));
      settoastvisible(true);
      setInterval(() => {
        settoastvisible(false);
      }, 3000);
    } catch (error) {
      seterror(error.response.data);
    }
  };
  return (
    <>
      <div className="flex justify-center my-10">
        <div className="flex justify-center mx-10">
          <div className="card bg-base-300 w-96 shadow-sm">
            <div className="card-body">
              <h2 className="card-title flex justify-center">Edit Profile</h2>
              <fieldset className="fieldset">
                <legend className="fieldset-legend">First Name</legend>
                <input
                  type="text"
                  className="input"
                  value={firstName}
                  onChange={(e) => {
                    setfirstName(e.target.value); //Binding state variable to the UI component
                  }}
                />
              </fieldset>
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Last Name</legend>
                <input
                  type="text"
                  className="input"
                  value={lastName}
                  onChange={(e) => {
                    setlastName(e.target.value);
                  }}
                />
              </fieldset>
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Photo URL</legend>
                <input
                  type="text"
                  className="input"
                  value={photoURL}
                  onChange={(e) => {
                    setphotoURL(e.target.value); //Binding state variable to the UI component
                  }}
                />
              </fieldset>
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Skills</legend>
                <input
                  type="text"
                  className="input"
                  value={skills?.join(", ") || ""}
                  onChange={(e) => {
                    setskills(
                      e.target.value.split(",").map((skill) => skill.trim())
                    ); //Binding state variable to the UI component
                  }}
                />
              </fieldset>
              <fieldset className="fieldset">
                <legend className="fieldset-legend">About</legend>
                <textarea
                  className="textarea"
                  value={about}
                  onChange={(e) => {
                    setabout(e.target.value); //Binding state variable to the UI component>
                  }}
                ></textarea>
              </fieldset>
              <div className="card-actions justify-center my-2">
                <button className="btn btn-primary" onClick={saveProfile}>
                  Save Profile
                </button>
              </div>
              <div>{error}</div>
            </div>
          </div>
        </div>
        <UserCard user={{ firstName, lastName, skills, photoURL, about }} />
      </div>
      {toastvisible && (
        <div className="toast toast-top toast-center">
          <div className="alert alert-success">
            <span>Profile updated successfully.</span>
          </div>
        </div>
      )}
    </>
  );
};

export default EditProfile;
