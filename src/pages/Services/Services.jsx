import { useEffect, useState } from "react";
import Service from "../Service/Service";


const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(()=>{
        fetch('services.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div>
            <div className="py-20"><h3 className="font-arimo font-medium text-3xl text-center">Our Services </h3></div>
            <div className="grid grid-cols-3 gap-4 ml-8">
                {
                    services.map(service=><Service 
                    key={service.id}
                    service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;