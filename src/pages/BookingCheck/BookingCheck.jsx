import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../componens/Providers/AuthProvider";
import BookingCheckRow from "./BookingCheckRow";
import Swal from "sweetalert2";
import axios from "axios";

const BookingCheck = () => {
  const { user } = useContext(AuthContext);
  //   console.log(user);
  const [checkout, setCheckout] = useState([]);
//   const [relode, setRelod] = useState(false)

  const url = `http://localhost:5000/checkout?email=${user?.email}`;
  useEffect(() => {
    // console.log('');
    // fetch(url)
    //   .then((res) => res.json())
    //   .then((data) => setCheckout(data));


    axios.get(url, {withCredentials: true})
    .then(res =>{
      setCheckout(res.data)
    })
  }, [url ]);//relode

  const handleDelete = (id) => {
    const proceed = confirm("Are you sure you want to delete");
    if (proceed) {
      fetch(`http://localhost:5000/checkout/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            Swal.fire("Delete success");
            const remaining = checkout.filter(
              (checkout) => checkout._id !== id
            );
            setCheckout(remaining);
          }
          // console.log(data);
        });
    }
  };

//  add handeleConfirm
  const handeleConfirm = (id) => {
    fetch(`http://localhost:5000/checkout/${id}`, {
      method: "PATCH",
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ status: 'confirm'}),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          // update state
          const remaining = checkout.filter(checkou => checkou._id !== id);
          const updated = checkout.find(checkou => checkou._id === id);
          updated.status = "confirm";
          const newcheckout = [updated, ...remaining];
          setCheckout(newcheckout);
        // setRelod(!relode)
        }
      });
  };
  return (
    <div>
      <h3 className="text-3xl">booking : {checkout.length}</h3>

      {/*  */}
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>image</th>
              <th>Service</th>
              <th>Date</th>
              <th>price </th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {checkout.map((checkou) => (
              <BookingCheckRow
                key={checkout._id}
                handleDelete={handleDelete}
                handeleConfirm={handeleConfirm}
                checkou={checkou}
              ></BookingCheckRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookingCheck;
