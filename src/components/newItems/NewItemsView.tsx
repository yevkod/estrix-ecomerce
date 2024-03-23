import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { Product } from '../../store/productsSlice';
import StarRatings from 'react-star-ratings';
import { setSelectedProduct } from '../../store/selectedProductSlice';

export const NewItemsView = () => {
  const dispatch: AppDispatch = useDispatch();
  const products = useSelector((state: RootState) =>
    Object.values(state.products.entities)
  );

  const handleProductClick = (product: Product) => {
    dispatch(setSelectedProduct(product));
  };

  return (
    <div className="relative">
      <div className="text-white text-[25px] mt-5 font-bold">New Arrivals</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 max-w-[90rem] mt-8 mx-auto">
        {products.length > 0 &&
          products.slice(0, 5)?.[0]?.map((item: Product) => (
            <div
              className=""
              key={item.id}
              onClick={() => handleProductClick(item)}
            >
              <div
                className="flex relative flex-col p-5 w-full h-full min-h-[350px] hover:scale-105 transition-all cursor-pointer rounded-md bg-gray-400"
                key={item.id}
              >
                <div className="max-w-[100%]">
                  <img className="max-w-[100%]" src={item.thumbnail} alt="" />
                </div>
                <div className=" text-black font-medium text-xl pt-4">
                  {item.title}
                </div>
                <div className="pt-3 font-bold text-lg">{item.price} $</div>
                <div className="pt-5">
                  <StarRatings
                    rating={item.rating}
                    starDimension="23px"
                    starSpacing="15px"
                    starRatedColor="gold"
                  />{' '}
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
