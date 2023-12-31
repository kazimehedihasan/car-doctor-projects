
import { useEffect } from "react";
import { useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
const [services, setServices] = useState([]);

useEffect(() =>{
fetch('http://localhost:5000/services')
.then(res => res.json())
.then(data => setServices(data))
},[])

  return (
    <div>
      <div className="space-y-5">
        <h3 className="text-[#FF3811] text-xl text-center">Service</h3>
<h3 className="text-[#151515] text-5xl text-center">Our Service Area</h3>
        <p className="text-xl text-center">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don t look even slightly believable. </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {
            services.map(service => <ServiceCard key={services._id} service={service}></ServiceCard>)
        }
      </div>
    </div>
  );
};

export default Services;
