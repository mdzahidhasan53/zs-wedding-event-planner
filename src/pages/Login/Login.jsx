import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";


const Login = () => {
    const { signIn, googleSignIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                console.log(result.user);
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.error(error)
            })
    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user);
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.error(error)
            })
    }
    return (
        <div className="w-2/3 mx-auto">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <p className="label-text-alt">New user please : <Link to='/register'><span className="link link-hover text-base font-arimo text-blue-500">Register</span></Link></p>
                            </label>
                        </div>
                        <div className="mt-6">
                            <div>
                                <button className="btn bg-[rgb(206,130,114)] text-white hover:text-black">Login</button>
                            </div>
                            <div>
                                <h3 className="font-arimo font-medium text-xl py-4">Or</h3>
                            </div>

                        </div>
                    </form>
                    <div className="ml-8">
                        <button onClick={handleGoogleSignIn} className="btn bg-[rgb(206,130,114)] text-white hover:text-black">Login With google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;