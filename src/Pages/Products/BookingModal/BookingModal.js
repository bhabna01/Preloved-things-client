import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";


const BookingModal = ({ selected, setSelected }) => {
  console.log("Modal info", selected);
  const {

    product_name,
    resale_price,

    seller_name,
    seller_email,

  } = selected;
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const location = form.location.value;
    const bookingDate = new Date();

    const bookingInfo = {

      productName: selected.product_name,
      buyerName: name,
      buyerEmail: email,
      buyerPhone: phone,
      buyerLocation: location,
      bookingDate,
      seller_name,
      seller_email,
      resale_price,
    };
    console.log(bookingInfo);

    fetch('https://preloved-things-server.vercel.app/bookings', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(bookingInfo)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.acknowledged) {
          setSelected(null);
          // setIsBooked(true);
          navigate('/dashboard/myOrders');
          toast.success('Booking confirmed');
          // refetch();

        }
        else {
          toast.error(data.message);
        }
      })
  };
  return (
    <>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label onClick={() => setSelected(null)}
            htmlFor="my-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>

          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1 gap-3 mt-10"
          >
            <input
              name="email"
              type="text"
              disabled
              value={user?.email}
              className="input w-full input-bordered"
            />
            <input
              name="name"
              type="email"
              disabled
              value={user?.displayName}
              className="input w-full input-bordered"
            />
            <input
              name="bookName"
              type="text"
              defaultValue={product_name}
              readOnly={true}
              className="input w-full input-bordered"
            />
            <input
              type="text"
              name="price"
              defaultValue={resale_price + " TK"}
              readOnly={true}
              className="input w-full input-bordered "
            />

            <input
              name="phone"
              type="text"
              placeholder="Phone Number"
              className="input w-full input-bordered"
            />
            <input
              name="location"
              type="text"
              placeholder="Meeting Location"
              className="input w-full input-bordered"
            />
            <br />
            <input
              className="btn btn-accent w-full"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
