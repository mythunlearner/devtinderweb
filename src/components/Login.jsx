import React from 'react'
import {useState} from "react";
import axios from 'axios';
import { useDispatch} from "react-redux";
import { addUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';
import  { BASE_URL }  from '../utils/constants';
const Login = () => {

   const [emailId, setEmailId] = useState("");
   const [password, setPassword] = useState("");
   const [error, setError] =useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const[photoUrl, setPhotoUrl] = useState("");
  const [gender, setGender] = useState("");
   const [isLogin, setIsLogin] = useState(true);
   const dispatch = useDispatch(); //Dispatch Hook 
   const navigate = useNavigate(); //Navigate to different URL

   const handleLogin = async() => {
    console.log("Login");
    try{
      const res = await axios.post( 
        BASE_URL + "/login",
        {
        emailId,
        password
      },
      { withCredentials: true}
    ) ;
      // console.log(res.data);
      dispatch(addUser(res.data)); //Dispatch and Action 
      return navigate("/"); //naviagte to different page 
    }catch(err){
        setError(err?.response?.data || "Something went wrong");
    }
   }

   const handleSignUp = async() => {
     try{
      const response = await axios.post(
        BASE_URL + "/signup",
        { firstName, lastName,age, emailId, password,photoUrl, gender },
        { withCredentials: true }
      );
      dispatch(addUser(response.data.data));
      return navigate("/profile");
     } catch(err){
         setError(err?.response?.data || "Something went wrong in Signup");
     }
  
   }

  return (
    <div className="flex justify-center my-10">
      <div className="card card-border bg-base-300 w-96">
        <div className="card-body">
          <h2 className="card-title justify-center">
            {isLogin ? "Login" : "SignUp"}
          </h2>
          {isLogin}
          {!isLogin && (
            <>
              <input
                type="text"
                className="input validator"
                required
                placeholder="First Name"
                pattern="[A-Za-z][A-Za-z0-9\-]*"
                minlength="3"
                maxlength="30"
                title="Only letters, numbers or dash"
                onChange={(e) => setFirstName(e.target.value)}
              />
              <p className="validator-hint">
                Must be 3 to 30 characters
                <br />
                containing only letters, numbers or dash
              </p>

              <input
                type="text"
                className="input validator"
                required
                placeholder="Last Name"
                pattern="[A-Za-z][A-Za-z0-9\-]*"
                min={3}
                max={30}
                title="Only letters, numbers or dash"
                onChange={(e) => setLastName(e.target.value)}
              />
              <p className="validator-hint">
                Must be 3 to 30 characters
                <br />
                containing only letters, numbers or dash
              </p>

              <label className="input input-bordered flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                </svg>
                <input
                  type="number"
                  className="grow"
                  placeholder="Age"
                  min="13"
                  max="100"
                  required
                  onChange={(e) => setAge(e.target.value)}
                />
              </label>
              <div className="label">
                <span className="label-text-alt text-info">
                  Must be between 13 and 100
                </span>
              </div>

              <select className="select select-bordered w-full" required
               onChange={(e) =>setGender(e.target.value)}>
                <option disabled selected>
                  Select Gender
                </option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
                <option value="Prefer not to say">Prefer not to say</option> 
              </select>
              <div className="label">
                <span className="label-text-alt text-info">
                  Please select your gender
                </span>
              </div>

              <label className="input input-bordered flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8Zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM5.5 5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm1.5-.5a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1Zm-4 6.5c0-.828.895-1.5 2-1.5s2 .672 2 1.5V12H3v-.5Zm6-3a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm1.5-.5a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1Zm-1 3.5c0-.828.895-1.5 2-1.5s2 .672 2 1.5V12h-4v-.5Z"
                    clipRule="evenodd"
                  />
                </svg>
                <input
                  type="url"
                  className="grow"
                  placeholder="https://example.com/photo.jpg"
                  pattern="https://.*\.(jpg|jpeg|png|gif|webp)(\?.*)?$"
                  title="Enter a valid image URL"
                  onChange={((e) => setPhotoUrl(e.target.value))}
                />
              </label>
              <div className="label">
                <span className="label-text-alt text-info">
                  Enter a valid image URL (jpg, jpeg, png, gif, webp)
                </span>
              </div>
            </>
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
              value={emailId}
              placeholder="mail@site.com"
              required
              onChange={(e) => setEmailId(e.target.value)}
            />
          </label>
          <div className="validator-hint hidden">Enter valid email address</div>

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
                <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
              </g>
            </svg>
            <input
              type="password"
              value={password}
              required
              placeholder="Password"
              minLength="8"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <p className="validator-hint hidden">
            Must be more than 8 characters, including
            <br />
            At least one number <br />
            At least one lowercase letter <br />
            At least one uppercase letter
          </p>
          <p className="text-red-500">{error}</p>
          <div className="card-actions justify-end">
            <button
              className="btn btn-primary"
              onClick={isLogin ? handleLogin : handleSignUp}
            >
              {isLogin ? "Login" : "SignUp"}
            </button>
          </div>
          <p
            className="m-auto cursor-pointer"
            onClick={() => setIsLogin((value) => !value)}
          >
            {isLogin ? "New user? Sign Up" : "Existing User? Login Here !"}{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login