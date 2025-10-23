
import BASE_URL from '../utils/constants'; 
import axios from 'axios';
const Premium = () => {

  const handleBuyClick = async (type) => {
    const order = await axios.post(BASE_URL + "/payment/create",
      {
        membershipType: type
      }, 
      { withCredentials: true }
    );

  const {amount,keyId,currency,orderId,notes} = order.data;

  const  options = {
    keyId: keyId,
    amount: amount,
    currency: currency,
    orderId: orderId,
    notes: notes,
    name: "DEV Tinder",
    prefill: {
      name: notes.firstName+ " " + notes.lastName,
      email: "customer@email.com",
      contact: "9876543210"
    },
    theme: { color: "#3399cc"}
  };


    var rzp = new window.Razorpay(options);
    rzp.open();

  };
  return (
    <div className="flex w-full flex-col lg:flex-row">
      <div className="card bg-base-300 rounded-box grid h-32 grow place-items-center">
        <h1 className='font-bold text-3xl'>Silver Membership</h1>
        <ul>
            <li> - Chat with other people </li>
            <li> - 100 connection Requests per day </li>
            <li> - Blue Tick </li>
            <li> - 3 months </li>
        </ul>
        <button onClick={() => handleBuyClick("gold")} className='btn btn-secondary'>Buy Silver</button>
      </div>
      <div className="divider lg:divider-horizontal">OR</div>
      <div className="card bg-base-300 rounded-box grid h-32 grow place-items-center">
        <h1 className='font-bold text-3xl'>Gold Membership</h1>
        <ul>
            <li> - Chat with other people </li>
            <li> - Infinite connection Requests per day </li>
            <li> - Blue Tick </li>
            <li> - 6 months </li>
        </ul>
        <button onClick={() => handleBuyClick("gold")} className='btn btn-primary'>Buy Gold</button>
      </div>
    </div>
  );
}

export default Premium