import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Intro = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    return (
        <div className="mt-24 grid grid-flow-row-dense grid-cols-7">
            <div 
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-duration="3000"
             data-aos-easing="ease-in-sine"
            className="col-span-2">
                <img src="https://i.postimg.cc/QMZzFYxg/home3-01.jpg" alt="" />
            </div>
            <div data-aos="zoom-in-up" 
            data-aos-duration="3000"
            className="col-span-3 px-16">
                <h3 className="font-arimo font-medium mt-6 text-4xl">Welcome to ZS Wedding Planner, a premier catering and event planning company in Bhola, Bangladesh.</h3>
                <p className="py-16">At Jude Nail Salon, we take pride in the quality of work that our nail technicians peform. We offer the highest levels of professionalism and sanitation for our clients while providing the best services and keeping our prices reasonable. At Jude Nail Salon, we take pride in the quality of work that our nail technicians perform.</p>
                <div>
                    <button className="btn bg-[rgb(206,130,114)] text-white hover:text-black">Learn More</button>
                </div>
            </div>
            <div 
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-duration="3000"
             data-aos-easing="ease-in-sine"
            className=" flex flex-col justify-center col-span-2">
                <img  src="https://i.postimg.cc/mgYw5LBM/home3-02.jpg" alt="" />
            </div>

        </div>
    );
};

export default Intro;