const CallToActionService = () => {
    return (
      <div className="m-4 my-10 flex flex-col md:flex-row items-center justify-between bg-white p-8 rounded-lg shadow-md max-w-6xl mx-auto  space-y-4 md:space-y-0 md:space-x-4">
        <div className="text-center md:text-left">
          <h3 className="text-lg md:text-xl font-bold text-blue-600">Helping brands to grow and attract more customers</h3>
          <p className="text-gray-600 mt-2">We help our clients achieve tangible, high-impact results.</p>
        </div>
        <button className="bg-blue-100 text-blue-600 font-normal px-4 py-3 rounded-full hover:bg-blue-200">
          Contact Us Now
        </button>
      </div>
    );
  };
  
  export default CallToActionService;
  