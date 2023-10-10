import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Banner = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div
      data-aos="zoom-in-up"
      data-aos-duration="3000"
      className=" bg-slate-500">
      <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.postimg.cc/3RP6d5QZ/wedding-1.jpg)' }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <h1 className="mb-5 text-5xl font-bold">Wedding Plannig</h1>
            <h1 className="mb-5 text-5xl font-bold">Perfect Day & Perfect Time</h1>

            <Link to="/contact"><button className="btn  bg-[rgb(206,130,114)] text-white hover:text-black">contact us</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;