import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import Carousel, { autoplayPlugin } from '@brainhubeu/react-carousel';
import { Product } from '../../store/productsSlice';
import { url } from 'inspector';

export const WelcomeView = () => {
  const dispatch: AppDispatch = useDispatch();
  const products = useSelector((state: RootState) =>
    Object.values(state.products.entities)
  );

  console.log('products Images', products);

  return (
    <div className="w-full relative z-50 mt-14 max-w-[900px] mx-auto p-5 bg-[#C4C4C4] h-full max-h-[350px] rounded-md">
      <div className="flex flex-col absolute">
        <div className="text-left">
          <span className="text-blue-700">WELCOME TO THE</span>
          <br></br> eSTRIX Store
        </div>
      </div>
      <div className="text-left pt-10">Buy, Trade In and Sell your games</div>
      <div className="flex flex-col max-w-[100%] relative">
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
            products?.map((product: Product) => (
              <div
                className="flex w-20 h-20 z-50"
                style={{ backgroundColor: `url(${product.images?.[0]})` }}
              >
                {/* <img
                  key={product.id}
                  src={product?.images?.[0]}
                  alt={product.title}
                /> */}
              </div>
            ))}
        </Carousel>
      </div>
    </div>
  );
};
