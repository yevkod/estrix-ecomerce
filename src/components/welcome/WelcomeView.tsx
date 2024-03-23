import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import Carousel, { autoplayPlugin } from '@brainhubeu/react-carousel';
import { Product } from '../../store/productsSlice';

export const WelcomeView = () => {
  const dispatch: AppDispatch = useDispatch();
  const products = useSelector((state: RootState) =>
    Object.values(state.products.entities)
  );

  return (
    <div className="w-full relative z-50 mt-14 max-w-[900px] mx-auto p-5 bg-[#C4C4C4] h-full max-h-[350px] rounded-md">
      <div className="text-left">
        <span className="text-blue-700">WELCOME TO THE</span>
        <br></br> eSTRIX Store
      </div>
      <div className="text-left pt-10">Buy, Trade In and Sell your games</div>
      <div className="z-500">
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
            products.map((item: Product) => (
              <>
                {Array.isArray(item.images) &&
                  item.images.length > 0 &&
                  item.images.map((image, index) => (
                    <img key={index} src={image.images[0]} alt={item.title} />
                  ))}
              </>
            ))}
        </Carousel>
      </div>
    </div>
  );
};
