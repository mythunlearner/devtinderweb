import axios from 'axios';
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { BASE_URL } from '../utils/constants';
import { addFeed } from '../utils/feedSlice';
import UserCard from './UserCard';

const Feed = () => {
  const feed = useSelector((store)=> store.feed);
 
  const dispatch = useDispatch();
  const getFeed  = async () => {
    if(feed) return;
    try{
     const res = await axios.get(BASE_URL + "/feed",{withCredentials: true});
     console.log("d" +  JSON.stringify(res?.data?.data));
     dispatch(addFeed(res?.data?.data));

    }catch(err){
       console.log("err"+err);
    }
  };

  useEffect(() => {
    getFeed();
  },[]);
  return (
    feed  && (
    <div>
      <UserCard user={feed[0]}/>
      </div>
    )
  )
}

export default Feed