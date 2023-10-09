import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Satisfaction = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    return (
        <div className="hero min-h-screen bg-base-200">
            <div 
            data-aos="zoom-in-left"
            data-aos-duration="3000"
            className="hero-content flex-col lg:flex-row-reverse">
                <img src="https://i.postimg.cc/zBYLtXsh/setisfiction.webp" className="max-w-sm rounded-lg shadow-2xl" />
                <div
                data-aos="zoom-in-up" 
                data-aos-duration="3000"
                className="w-[600px]">
                    <h1 className="text-5xl font-arimo font-bold">Satisfaction Guaranteed</h1>
                    <h2 className="text-2xl font-arimo font-medium py-6">Outstanding Quality</h2>
                    <p className=" font-arimo">At Captivating Events by Chi, we believe in creating unique moments that leave a lasting impression. What differentiates us from our competitors is that we listen to our clients, creating unique events tailored to their specific needs and desires. Our innovative mix of solutions ensures that every detail is covered.</p>
                    
                </div>
            </div>
        </div>
    );
};

export default Satisfaction;