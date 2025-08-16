import React from 'react'

const UserCard = ({ user }) => {

  const {firstName, lastName, photoUrl, gender, age, about, emailId} = user;
  console.log("user ==> " + JSON.stringify(user));
  console.log(age);
  console.log(gender);
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
        <div className="badge badge-outline">Ignore</div>
        <div className="badge badge-outline">Send Request</div>
        </div>
    </div>
    </div>
</div>
  )
}

export default UserCard