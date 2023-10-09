

const Contact = () => {
    return (
        <div className="mt-16">
            <h3 className="text-3xl font-arimo font-medium text-center">Contact Us</h3>
            <h4 className="text-xl font-arimo font-medium text-center py-3"> chiquita@cebychi.com</h4>
            <div className="ml-52">
                <h3 className="text-2xl font-arimo font-medium ">Working Hours</h3>
                <h3 className="text-xl font-arimo font-medium py-3">Contact us Today</h3>
            </div>
            <div className="text-center">
                <h3 className="text-xl font-arimo font-medium">Monday: 11am-6pm</h3>
                <h3 className="text-xl font-arimo font-medium py-3">Tuesday: 11am-6pm</h3>
                <h3 className="text-xl font-arimo font-medium pb-3">Thursday: 11am-6pm</h3>
                <div>
                    <img className="w-full" src="https://i.postimg.cc/4NRYhYxV/contact.webp" alt="" />
                </div>
                <div className="my-10">
                    <h3 className="text-3xl font-arimo font-medium text-center">Submit Proposal</h3>
                    <p className="text-center px-14">
                        Are you ready to turn your event dreams into a reality? Look no further! Our expert team is here to meet all your event planning and management needs. From start to finish, we will handle every detail, ensuring a seamless and unforgettable experience for you and your guests. Submit your proposal today and let's start crafting an event that will leave everyone inspired and amazed!
                    </p>
                </div>
                <div className="w-1/3 mx-auto mb-10">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Name:</span>
                        </label>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Email:</span>
                        </label>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Phone Number:</span>
                        </label>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Budget:</span>
                        </label>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                    </div>
                    <div className="form-control w-full mt-4">
                        <input className="btn bg-[rgb(206,130,114)] text-white hover:text-black " type="submit" value="Submit" placeholder="Submit" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;