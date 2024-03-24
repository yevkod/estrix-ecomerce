import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectSelectedProduct,
  selectShowProductDetails,
} from '../../store/selectedProductSlice';
import StarRatings from 'react-star-ratings';
import Carousel, { autoplayPlugin } from '@brainhubeu/react-carousel';
import { AppDispatch, RootState } from '../../store';
import { Product } from '../../store/productsSlice';
import { calculateDiscountedPrice } from '../../helpers';
import { Button } from '../button/Button';

export const ProductDetailsView = () => {
  const selectedProduct = useSelector(selectSelectedProduct);
  const dispatch: AppDispatch = useDispatch();
  const showProductDetails = useSelector(selectShowProductDetails);
  const products = useSelector((state: RootState) =>
    Object.values(state.products.entities)
  );

  console.log('selectedProduct', selectedProduct?.images);

  return (
    <div className="min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 max-w-[90rem] mx-auto">
        <div className="">
          <Carousel plugins={['arrows', 'infinite']}>
            {selectedProduct?.images?.map((image: string, index: number) => (
              <>
                <img key={index} src={image} alt={image} />
              </>
            ))}
          </Carousel>
        </div>
        <div className="flex flex-col text-white self-start text-left bg-gray-800 rounded-xl p-8">
          <div className="text-[30px] font-bold">{selectedProduct?.title}</div>
          <div className="text-[20px] pt-5 font-semibold">
            {selectedProduct?.brand}
          </div>
          <div className="pt-8 font-semibold">
            {selectedProduct?.description}
          </div>
          <div className="pt-5">
            {}
            <StarRatings
              rating={selectedProduct?.rating}
              starDimension="23px"
              starSpacing="15px"
              starRatedColor="gold"
            />{' '}
          </div>
          <div className="flex flex-col">
            <div className="flex font-bold text-[20px] bg-red-500 max-w-[20%] justify-center p-2 mt-5 items-center rounded-lg">
              <div className="">-{selectedProduct?.discountPercentage} %</div>
            </div>
            <div className="flex gap-8 pt-5 items-center font-bold text-[20px]">
              {selectedProduct?.price &&
                selectedProduct?.discountPercentage &&
                calculateDiscountedPrice(
                  selectedProduct.price,
                  selectedProduct.discountPercentage
                ).discountedPrice.toFixed(0)}
              $<div className="line-through">{selectedProduct?.price} $</div>
              <div className="flex items-center">
                <Button
                  text="Buy now"
                  className="px-16 py-3 !bg-blue-500 !active:bg-blue-700 !hover:bg-blue-600"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-8 pt-10 max-w-[90rem] mx-auto">
        {selectedProduct?.images.map((item) => (
          <div className="gap-5">
            <img src={item} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};
