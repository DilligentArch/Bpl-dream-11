
const FloaatingWindow = () => {
    return (
        <div className="w-11/12 md:w-4/6 mx-auto border-2 p-5 rounded-xl relative -bottom-32 z-0">
        <div className="flex flex-col justify-center items-center py-10 md:py-20 footer-1 rounded-xl shadow-lg bg-white px-2">
          <div>
            <p className="font-bold text-lg md:text-2xl text-center">Subscribe to our Newsletter</p>
            <p className="font-semibold text-gray-400 mt-3 text-center">
              Get the latest updates and news right in your inbox!
            </p>
            <div className="flex flex-col md:flex-row justify-center space-y-3 md:space-y-0 md:space-x-4 mt-3">
              <div>
                <label className="input input-bordered flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70"
                  >
                    <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                    <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                  </svg>
                  <input type="text" className="grow p-2 rounded-lg" placeholder="Enter your email" />
                </label>
              </div>
              <div className="text-center">
                <button className="btn px-5 py-2 rounded-lg text-white bg-gradient-to-r from-pink-400 to-yellow-500">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default FloaatingWindow;