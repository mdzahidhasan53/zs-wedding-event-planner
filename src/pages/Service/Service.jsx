import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Service = ({ service }) => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    const {id, name, image, details, price } = service;
    return (
        <div
            data-aos="zoom-in"
            data-aos-duration="3000"
            className="card bg-base-100 shadow-xl">
            <figure><img className="h-[350px]" src={image} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{details}</p>
                <p>Price :{price}</p>
                <div className="card-actions">
                    <Link to = {`/service/${id}`}>
                        <button className="btn bg-[rgb(206,130,114)] text-white hover:text-black">More info</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Service;