import { useLoaderData, useParams } from "react-router-dom";


const Details = () => {
    const services = useLoaderData();
    const { id } = useParams();
    const service = services.find(service => service.id == id);
    console.log(service);
    return (
        <div>
            <h3 className="text-3xl font-arimo font-semibold text-center py-12">Service details</h3>
            <div>
                <div className="card card-compact bg-base-100 shadow-xl">
                    <figure><img src={service.image} alt="" /></figure>
                    <div className="card-body">
                        <h2 className="text-center font-arimo font-semibold text-xl">{service.name}</h2>
                        <p className="text-center font-arimo">{service.details}</p>
                        <p className="text-center font-arimo" > Price: {service.price}</p>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;