// components/HighImpactResults.tsx

const HighImpactResults = () => {
    return (
      <div className="p-4 sm:p-10 lg:p-20 flex items-center justify-center">
        <div className="max-w-6xl w-full bg-white rounded-lg space-y-8 sm:space-y-12 shadow-2xl overflow-hidden p-6 sm:p-12 lg:p-20 text-center">
          <h4 className="text-gray-500 font-bold text-lg sm:text-xl uppercase tracking-wide">
            High Impact Results
          </h4>
          <h2 className="text-2xl sm:text-3xl font-bold leading-relaxed text-[#2D3748] mt-4">
            Strategies Focused on Your <br/> Performance
          </h2>
          <div className="mt-8 sm:mt-12 space-y-6 sm:space-y-0 sm:space-x-12 flex flex-col sm:flex-row justify-center sm:justify-between">
            <div className="flex flex-col items-center">
              <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-500">450</span>
              <p className="text-gray-600 mt-2 text-sm sm:text-base">Leads Generated</p>
            </div>
            <div className="flex flex-col items-center mt-8 sm:mt-0">
              <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-500">500</span>
              <p className="text-gray-600 mt-2 text-sm sm:text-base">Marketing Campaigns</p>
            </div>
            <div className="flex flex-col items-center mt-8 sm:mt-0">
              <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-500">200</span>
              <p className="text-gray-600 mt-2 text-sm sm:text-base">Successful Clients</p>
            </div>
            <div className="flex flex-col items-center mt-8 sm:mt-0">
              <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-500">100</span>
              <p className="text-gray-600 mt-2 text-sm sm:text-base">Social Media</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default HighImpactResults;
  