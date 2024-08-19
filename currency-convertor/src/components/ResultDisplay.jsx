import React from 'react';

const ResultDisplay = ({ convertedAmount, conversionDetails }) => {
  return (
    <div className="flex items-center justify-center py-8">
      <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-lg backdrop-blur-lg">
        <h2 className="text-xl font-semibold text-gray-800 text-center mb-4">
          Conversion Result
        </h2>
        <div className="text-2xl font-bold text-blue-600 text-center">
          {convertedAmount !== null ? conversionDetails : 'Enter an amount to convert'}
        </div>
      </div>
    </div>
  );
};

export default ResultDisplay;
