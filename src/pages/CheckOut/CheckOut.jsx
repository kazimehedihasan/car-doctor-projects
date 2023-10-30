import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../componens/Providers/AuthProvider";
import Swal from 'sweetalert2'

const CheckOut = () => {
    const service = useLoaderData();
    const {title, _id, price, img} = service
    console.log(service);
const {user} = useContext(AuthContext);
const handleChekOutService = (e) => {
  e.preventDefault();
const form = e.target;
const name =form.name.value;
const date =form.date.value;
const email =form.email.value;
const price =form.price.value;
const addProducts = {
  customerName: name,
  email,
  img,
  date,
  service:title,
  service_id: _id,
  price: price
}
console.log(addProducts);

fetch('http://localhost:5000/checkout', {
  method: 'POST',
  headers:{
'content-type': 'application/json'
  },
body:JSON.stringify(addProducts)
})
.then(res => res.json())
.then(data =>{
  if(data.insertedId){
Swal.fire(
  'success'
)
  }
  console.log(data);
})
}

    return (
        <div>
            <h3 className="text-center text-3xl">checkout : {title}</h3>
      <form onSubmit={handleChekOutService} className="card-body">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {/* 1 */}
    <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" defaultValue={user?.displayName} name="name" className="input input-bordered" required />
        </div>
{/* 2 */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Date</span>
          </label>
          <input type="date" name="date" className="input input-bordered" required />
        </div>
{/* 3 */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" defaultValue={user?.email} name="email" className="input input-bordered" required />
        </div>
{/* 4 */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Due amount</span>
          </label>
          <input type="text" defaultValue={'$'+price} name="price" className="input input-bordered" required />
        </div>
</div>

        <div className="form-control mt-6">
      
          <input className="btn bg-[#FF3811] btn-block" type="submit" value="Order Confirm" /> 

        </div>
      </form>
    </div>
    );
};

export default CheckOut;

//59 ar 10 dekha hoiche