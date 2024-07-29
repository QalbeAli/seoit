const CallToAction = () => {
  return (
    <div className="m-4 flex flex-col md:flex-row items-center justify-between bg-white p-8 rounded-lg shadow-md max-w-6xl mx-auto my-8 space-y-4 md:space-y-0 md:space-x-4">
      <div className="text-center md:text-left">
        <h3 className="text-lg md:text-xl font-bold text-blue-600">Understand First. Lorem ipsum dolor sit amet.</h3>
        <p className="text-gray-600 mt-2">We help our clients achieve tangible, high-impact results.</p>
      </div>
      <button className="bg-blue-100 text-blue-600 font-normal px-4 py-3 rounded-full hover:bg-blue-200">
        Download our Free Cheat Sheet
      </button>
    </div>
  );
};

export default CallToAction;
