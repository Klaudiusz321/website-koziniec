import React from 'react';

const About: React.FC = () => {
  return (
    <section className="bg-black text-white py-16 px-8 md:px-16 lg:px-32">
      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Tekst po lewej stronie */}
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold mb-6">What is Tuning and Why Do You Want It?</h2>
          <p className="text-lg text-gray-300 mb-6">
            Tuning is an upgrade to the software in the vehicle’s computer. Custom software is installed that changes many parameters that control the way the engine operates. With proper tuning, you can increase both power and fuel economy.
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                <span className="text-white text-2xl">🔧</span>
              </div>
              <p className="text-gray-300">A comprehensive tool for high horsepower builds.</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                <span className="text-white text-2xl">⚙️</span>
              </div>
              <p className="text-gray-300">With proper tuning, you can increase fuel economy.</p>
            </div>
          </div>
        </div>

        {/* Obrazek po prawej stronie */}
        <div className="md:w-1/2">
          <img
            src="/images/speedometer.jpg"
            alt="Speedometer"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
