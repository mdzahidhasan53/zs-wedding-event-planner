import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";


const Register = () => {
    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('');
    const { createUser } = useContext(AuthContext);
    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const email = form.get('email');
        const password = form.get('password')
        console.log(name, email, password);
        if (password.length < 6) {
            setRegisterError('Your password should be 6 characters or longer');
            return;
        }
        setRegisterError('');
        setSuccess('');
        createUser(email, password)
            .then(() => {
                setSuccess('User created succesfully')
            })
            .catch(error => {
                setRegisterError(error.message)
            })
    }
    return (
        <div className="w-2/3 mx-auto">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>

                </div>
                <div className=" flex-shrink-0 w-full shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                        </div>
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
                                <p className="label-text-alt">Already have an account : <Link to='/login'><span className="link link-hover text-base font-arimo text-blue-500">Login</span></Link></p>
                            </label>
                        </div>
                        <div className=" mt-6">
                            <button className="btn bg-[rgb(206,130,114)] text-white hover:text-black">Register</button>
                        </div>
                    </form>
                    {
                        registerError &&
                        <div className="toast toast-top toast-center">
                            <div className="alert alert-info">
                                <span>{registerError}</span>
                            </div>

                        </div>
                    }
                    {
                        success &&
                        <div className="toast toast-top toast-center">
                            
                            <div className="alert alert-success">
                                <span>{success}</span>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Register;