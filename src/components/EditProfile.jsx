import React from 'react'
import {useState} from "react";
import UserCard from './UserCard';
import { BASE_URL } from '../utils/constants';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const EditProfile = ({user}) => {

    const [firstName, setFirstName] = useState(user.firstName);
     const [lastName, setLastName] = useState(user.lastName);
     const [age, setAge] =useState(user.age);  
     const [emailId, setEmailId] = useState(user.emailId);
     const [gender , setGender] = useState(user.gender);
     const [about, setAbout] = useState(user.about);
     const [photoUrl, setPhotoUrl] = useState(user.photoUrl);
     const [error, setError] = useState("");
     const [showToast, setShowToast] = useState(false);
     const dispatch = useDispatch();

  const saveProfile = async () => {
    setError("");
    try{
      const res = await axios.patch(BASE_URL+ "/profile/edit",{
         firstName,
         lastName,
          photoUrl,
           gender, 
           age, 
           about, 
           emailId
      },{withCredentials: true})

      dispatch(addUser(res?.data?.data))
      setShowToast(true);
      setTimeout(() => {
       setShowToast(false);
      }, 3000);
    }catch(err){
      setError(err.response.data);
    }
  } ;  
  return (
    <div className="flex justify-center my-10">
      <div className="flex justify-center">
        <div className="card card-border bg-base-300 w-96">
          <div className="card-body">
            <h2 className="card-title justify-center">Edit Profile</h2>
            <label className="input validator">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </g>
              </svg>
              <input
                type="text"
                required
                placeholder="FirstName"
                pattern="[A-Za-z][A-Za-z0-9\-]*"
                minlength="3"
                maxlength="30"
                title="Only letters, numbers or dash"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </label>
            {firstName && !/^[A-Za-z][A-Za-z0-9_-]{2,15}$/.test(firstName) && (
              <p className="text-red-500 text-sm">
                FirstName must start with a letter, 3–16 characters long.
              </p>
            )}

            <label className="input validator">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </g>
              </svg>
              <input
                type="text"
                required
                placeholder="LastName"
                pattern="[A-Za-z][A-Za-z0-9\-]*"
                minlength="3"
                maxlength="30"
                title="Only letters, numbers or dash"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </label>
            {lastName && !/^[A-Za-z][A-Za-z0-9_-]{2,15}$/.test(lastName) && (
              <p className="text-red-500 text-sm">
                LastName must start with a letter, 3–16 characters long.
              </p>
            )}

            <label className="input validator">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </g>
              </svg>
              <input
                type="text"
                required
                placeholder="Age"
                pattern="[0-9]{1,2}" // ✅ Only 1 or 2 digit numbers
                title="Enter a valid age (1–99)"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </label>

            {!age && <p className="validator-hint text-red-500">Required</p>}

            {age && !/^[0-9]{1,2}$/.test(age) && (
              <p className="validator-hint text-red-500">
                Enter a valid age (1–99)
              </p>
            )}

            <label className="input validator">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </g>
              </svg>
              <input
                type="email"
                placeholder="mail@site.com"
                required
                value={emailId}
                onChange={(e) => setEmailId(e.target.value)}
              />
            </label>

            {emailId && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailId) && (
              <p className="text-red-500 text-sm">
                Please enter a valid email.
              </p>
            )}

            <label className="input validator">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </g>
              </svg>
              <input
                type="text"
                required
                placeholder="Gender"
                pattern="^(Male|Female|Other)$"
                title="Please enter Male, Female, or Other"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              />
            </label>
            {/* Custom message (optional, more user-friendly) */}
            {gender && !/^(Male|Female|Other)$/i.test(gender) && (
              <p className="validator-hint text-red-500">
                Allowed: Male, Female, or Other
              </p>
            )}

            <label className="input validator">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </g>
              </svg>
              <input
                type="text"
                required
                placeholder="Photo URL"
                title="Only letters, numbers or dash"
                value={photoUrl}
                onChange={(e) => setPhotoUrl(e.target.value)}
              />
            </label>
            {!photoUrl && (
              <p className="text-red-500 text-sm">Photo Url is Empty</p>
            )}

            <label className="flex items-start gap-2 p-2 border rounded-lg bg-gray-900 text-white focus-within:ring-2 focus-within:ring-blue-500">
              <svg
                className="h-5 w-5 opacity-50 mt-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 12h14M12 5l7 7-7 7"
                />
              </svg>
              <textarea
                required
                placeholder="About"
                minLength="10"
                maxLength="200"
                className="flex-1 bg-transparent outline-none resize-none h-24"
                title="Write something between 10–200 characters"
                value={about}
                onChange={(e) => setAbout(e.target.value)}
              />
            </label>
            {about && (about.length < 10 || about.length > 200) && (
              <p className="validator-hint text-red-500">
                About must be between 10 and 200 characters
              </p>
            )}

            <p className="validator-hint">Required</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary" onClick={saveProfile}>
                Save Profile
              </button>
            </div>
          </div>
        </div>
      </div>
      <UserCard user={{ firstName, lastName, photoUrl, age, gender, about }} />

      { showToast && <div className="toast toast-top toast-center">
        <div className="alert alert-success">
          <span>Message sent successfully.</span>
        </div>
      </div>}
    </div>
  );
}

export default EditProfile