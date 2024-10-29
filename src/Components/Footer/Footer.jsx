

const Footer = () => {
    return (
        <div className="bg-black pt-72 w-full  pb-10">
            <div className="w-1/5 mx-auto mb-8 ">
                <img src="logo-footer.png">
                </img>
            </div>
            <div className="w-5/6 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-x-36">
                <div >
                    <h1 className="text-white font-semibold text-lg mb-4">
                        About us
                    </h1>
                    <p className="text-[#FFFFFF99]">
                        We are a passionate team dedicated to providing the best services to our customers.
                    </p>
                </div>
                <div className="lg:ml-9">
                    <h1 className="text-white font-semibold text-lg mb-4">
                        Quick links
                    </h1>
                    <ul className="text-[#FFFFFF99] list-disc pl-5 space-y-2 ">
                        <li>Home</li>
                        <li>Service</li>
                        <li>About</li>
                        <li>Contract</li>
                    </ul>
                </div>
                <div>
                    <h1 className="text-white font-semibold text-lg mb-4">
                        Subscribe
                    </h1>
                    <p className="text-[#FFFFFF99]">
                        Subscribe to our newsletter for the latest updates.
                    </p>
                    <div className="flex items-center bg-white rounded-full overflow-hidden shadow-md mt-4">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="px-4 py-2 text-black flex-1 focus:outline-none"
                        />
                        <button className="bg-gradient-to-r from-yellow-400 to-pink-500 px-6 py-2 font-semibold text-white">
                            Subscribe
                        </button>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Footer;