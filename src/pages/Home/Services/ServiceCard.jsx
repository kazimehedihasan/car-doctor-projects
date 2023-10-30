/* eslint-disable react/prop-types */
import { BiRightArrowAlt} from "react-icons/bi";
import { Link } from "react-router-dom";

const ServiceCard = ({service}) => {

    const {_id, title, img, price} = service;
    return (
        <div>
  <div className="card w-[364px] h-[348px] bg-base-100 shadow-xl">
<figure className="px-10 pt-10">
<img src={img} alt="image" className="rounded-xl" />
</figure>
    
    <div className="card-body  ">
      
      <h1 className="text-2xl font-bold card-title"> {title}</h1>
      <div className="flex justify-between items-center">
      <p className="py-6 text-[#FF3811]">price : ${price}</p>
<Link to={`/checkout/${_id}`}>
<BiRightArrowAlt className="w-[24px] h-[24px] text-[#FF3811]"/>
</Link>
      </div>
    </div>
  </div>
        </div>
    );
};

export default ServiceCard;