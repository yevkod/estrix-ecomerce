import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import Carousel, { autoplayPlugin } from '@brainhubeu/react-carousel';
import { Product } from '../../store/productsSlice';
import bg from '../../assets/imgs/bg.jpg';

export const WelcomeView = () => {
  const dispatch: AppDispatch = useDispatch();
  const products = useSelector((state: RootState) =>
    Object.values(state.products.entities)
  );

  return (
    <div
      className="relative z-50 max-w-[90rem] mt-12 mx-auto bg-gray-500 p-5 min-h-[350px] rounded-md"
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
          <span className="text-blue-700 text-3xl font-bold">
            WELCOME TO THE <br></br>eSTRIX Store
          </span>
        </div>
      </div>
      <div className="text-left font-bold text-blue-700 pt-20">
        Buy, Trade In and Sell your products
      </div>
      {/* <div className="flex flex-col max-w-[100%] relative">
        <Carousel
          plugins={[
            'infinite',
            {
              resolve: autoplayPlugin,
              options: {
                interval: 2000,
              },
            },
          ]}
          animationSpeed={1000}
        >
          {products.length > 0 &&
            products[0]?.map((product: Product) => (
              <div className="flex w-full h-56 z-50">
                <img src={product.thumbnail} alt="" className="w-64 h-56" />
              </div>
            ))}
        </Carousel>
      </div> */}
    </div>
  );
};
