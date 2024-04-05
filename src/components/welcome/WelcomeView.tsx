import React from 'react';
import bg from '../../assets/imgs/bg.jpg';

export const WelcomeView = () => {

  return (
    <div
      className="relative z-50 !max-w-[90rem] mt-12 mx-auto bg-gray-500 p-5 lg:min-h-[350px] rounded-md"
      style={{
        backgroundImage: `url(${bg})`,
        maxWidth: '100%',
        display: 'flex',
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        width: '100%',
      }}
    >
      <div className="flex flex-col absolute">
        <div className="text-left">
          <span className="text-blue-700 text-[12px] lg:text-3xl font-bold">
            WELCOME TO THE <br></br>eSTRIX Store
          </span>
        </div>
      </div>
      <div className="text-left font-bold text-[10px] lg:text-xl text-blue-700 pt-20">
        Buy, Trade In and Sell your products
      </div>
    </div>
  );
};
