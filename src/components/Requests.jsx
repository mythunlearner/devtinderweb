import React from 'react'
import { BASE_URL } from '../utils/constants'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addRequests, removeRequest } from '../utils/requestSlice';
import { useEffect } from "react";

const Requests = () => {
    const requests = useSelector((store) => store.requests);
    const dispatch = useDispatch(); 

    console.log("Requests: ==>" + JSON.stringify(requests));

    /**
     * Sends a review request to the server to update the status of a specific request.
     *
     * @async
     * @function reviewRequest
     * @param {string} status - The new status to set for the request (e.g., "approved", "rejected").
     * @param {string} _id - The unique identifier of the request to be reviewed.
     * @returns {Promise<void>} Resolves when the request is completed.
     * @throws Will log an error to the console if the request fails.
     */
    const reviewRequest = async (status, _id) => {
      console.log("Status: " + status + " ID: " + _id);
       try{
          /**
           * Sends a POST request to review a request with the given status and ID.
           * The request body is intentionally left empty as the server does not require any payload.
           * 
           * @type {import('axios').AxiosResponse}
           * @see BASE_URL + "/requests/review/" + status + "/" + _id
           */
          const res = await axios.post(
            BASE_URL + "/request/review/" + status + "/" + _id,
             {} ,
             {withCredentials:true}
          );
          dispatch(removeRequest(_id));
          console.log("Response from review request: ", res);
       }catch(err) {
        console.log(err);;
       }
    };
    const fetchRequests = async () => {
        try{
            const res = await axios.get(BASE_URL+ "/user/requests/received", {withCredentials:true});
            
            console.log(JSON.stringify(res?.data.connRequest));
            dispatch(addRequests(res?.data.connRequest));
            console.log("J==" + JSON.stringify(res?.data.connRequest));
        }catch(err){
            console.log("error" + err);
        }
    };

    useEffect(() => {
        fetchRequests();
    },[]);

   if(!requests) return;

    if(requests.length == 0) return <h1>No Requests Found</h1>
  return (
    <div className='text-center my-10'>
      <h1 className='text-bold  text-x1'>Connection Request</h1>
       {requests.map((request)=>{
         <div key={request._id}>
          <p> test {request.fromUserId.firstName} {request.fromUserId.lastName}</p>
           
         </div>;
       const request_id = request._id;
        const {_id, firstName, lastName, age, photoUrl, about, gender} = request.fromUserId;
        return (
          <>
          <div key={_id} className="flex justify-between items-center um-4 p-4 bg-base-200 rounded-lg w-2/3 mx-auto">
            <div>
              <img alt="photo" className="w-20 h-20 rounded-full" src={photoUrl} />
            </div>
            <div className='text-left mx-4'>
              <h1 className='font-bold text-xl'>{firstName + "  " + lastName}</h1>
              {age && gender && <p>{age+ ", " + gender}</p>}
              <p>{about}</p>
            </div>
               <div className='flex'>  
                <button className="btn btn-primary mx-2" onClick={() => reviewRequest("rejected", request_id)}>Reject</button>
                <button className="btn btn-secondary mx-2" onClick={() => reviewRequest("accepted", request_id)}>Accept</button>
          </div>
          </div>
          
         </>
        );
        })}
    </div>
  );
}

export default Requests