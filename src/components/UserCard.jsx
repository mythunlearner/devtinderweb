import React from 'react'
import { BASE_URL } from '../utils/constants';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import {removeUserFromFeed} from '../utils/feedSlice';
const UserCard = ({ user }) => {
  const {_id, firstName, lastName, photoUrl, gender, age, about, emailId} = user;
  console.log("user ==> " + JSON.stringify(user));
  console.log(age);
  console.log(gender);
  const dispatch = useDispatch()
  const handleSendRequest  = async (status ,userId) => {
    try{
        
      const response = await axios.post(BASE_URL+"/request/send/" + status + "/" + userId, {} ,{withCredentials: true});
      dispatch(removeUserFromFeed(userId))
    }catch(err){
      console.log("err"+err);
    }
  }
  return (
<div className='flex items-center justify-center min-h-screen bg-base-200'>   
    <div className="card bg-base-100 w-96 shadow-sm">
    <figure>
        <img
        src={photoUrl}
        alt="Shoes" />
    </figure>
    <div className="card-body">
        <h2 className="card-title">
        {firstName + "" +lastName}
        {/* <div className="badge badge-secondary">NEW</div> */}
        </h2>
        {age &&  gender && <p>{age + "," + gender}</p>}
        <p>{about}</p>
        <div className="card-actions justify-end">
        <div className="badge badge-outline" onClick={() => handleSendRequest("ignored", _id)}>Ignore</div>
        <div className="badge badge-outline" onClick={() => handleSendRequest("interested", _id)}>Send Request</div>
        </div>
    </div>
    </div>
</div>
  )
}

export default UserCard