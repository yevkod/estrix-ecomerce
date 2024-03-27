import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { Product } from '../../store/productsSlice';
import StarRatings from 'react-star-ratings';
import { setSelectedProduct } from '../../store/selectedProductSlice';
import { Button } from '../button/Button';
import { calculateDiscountedPrice } from '../../helpers';
import { useNavigate } from 'react-router';

export const NewItemsView = () => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector((state: RootState) =>
    Object.values(state.products.entities)
  );

  const handleProductClick = (product: Product) => {
    dispatch(setSelectedProduct(product));
    navigate(`/items/${product.id}`);
  };

  return (
    <div className="relative">
      <div className="text-white text-[25px] mt-5 font-bold">New Arrivals</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 max-w-[90rem] mt-8 mx-auto">
        {products.length > 0 &&
          products[0].slice(0, 6)?.map((item: Product) => (
            <div
              className=""
              key={item.id}
              onClick={() => handleProductClick(item)}
            >
              <div
                className="flex relative flex-col p-5 items-center w-full h-full min-h-[350px] hover:scale-105 transition-all cursor-pointer rounded-md bg-slate-700 text-white"
                key={item.id}
              >
                <div className="flex absolute right-7 top-3 font-bold text-[20px] bg-red-500 max-w-[40%] justify-center p-2 mt-5 items-center rounded-lg">
                  <div className="">-{item?.discountPercentage} %</div>
                </div>
                <div className="max-w-[100%]">
                  <img className="max-w-[100%]" src={item.thumbnail} alt="" />
                </div>
                <div className=" text-white font-medium text-xl pt-4 ">
                  {item.title}
                </div>
                <div className="pt-5">
                  <StarRatings
                    rating={item.rating}
                    starDimension="23px"
                    starSpacing="15px"
                    starRatedColor="gold"
                  />{' '}
                </div>
                <div className="flex gap-8 pt-5 text-white items-center font-bold text-[20px]">
                  {item?.price &&
                    item?.discountPercentage &&
                    calculateDiscountedPrice(
                      item.price,
                      item.discountPercentage
                    ).discountedPrice.toFixed(0)}
                  $<div className="line-through">{item?.price} $</div>
                </div>
                <div className="flex items-center pt-5">
                  <Button
                    text="Buy now"
                    className="px-16 py-3 !bg-blue-500 !active:bg-blue-700 !hover:bg-blue-600"
                  />
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
