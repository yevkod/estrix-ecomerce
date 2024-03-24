import React from 'react';
import StarRatings from 'react-star-ratings';
import { AppDispatch, RootState } from '../../store';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedProduct } from '../../store/selectedProductSlice';
import { Product } from '../../store/productsSlice';

export const ItemsView = () => {
  const dispatch: AppDispatch = useDispatch();
  const products = useSelector((state: RootState) =>
    Object.values(state.products.entities)
  );

  const handleProductClick = (product: Product) => {
    dispatch(setSelectedProduct(product));
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 max-w-[90rem] mt-8 mx-auto">
        {products.length > 0 &&
          products?.[0]?.map((item: Product) => (
            <div
              className=""
              key={item.id}
              onClick={() => handleProductClick(item)}
            >
              <div
                className="flex relative flex-col p-5 w-full h-full min-h-[350px] hover:scale-105 transition-all cursor-pointer rounded-md bg-gray-400"
                key={item.id}
              >
                <div className="flex absolute right-7 top-3 font-bold text-[20px] bg-red-500 max-w-[40%] justify-center p-2 mt-5 items-center rounded-lg">
                  <div className="">-{item?.discountPercentage} %</div>
                </div>
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
