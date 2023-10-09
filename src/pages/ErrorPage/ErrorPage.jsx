import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="flex flex-col justify-center items-center mt-64">
            <h3 className="font-arimo font-semibold text-4xl text-red-500">Ooops !!!</h3>
            <h4 className="font-arimo font-normal text-xl py-3">Page not found</h4>
            <div>
                <Link><button className="btn bg-[rgb(206,130,114)] text-white hover:text-black">Go Home</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;