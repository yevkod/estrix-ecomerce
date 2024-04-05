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
import {
  deleteItemFromCart,
  setItemInCart,
} from '../../store/cartSlice';

export const ProductDetailsView = () => {
  const selectedProduct = useSelector(selectSelectedProduct);
  const dispatch: AppDispatch = useDispatch();
  const productsBasket = useSelector(
    (state: RootState) => state.cart.itemsInCart
  );

  const handleItemBasket = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    product: Product
  ) => {
    e.stopPropagation();
    productsBasket.some((item) => item.id === product?.id)
      ? dispatch(deleteItemFromCart(product?.id))
      : dispatch(setItemInCart(product));
  };

  return (
    <div className="min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 max-w-[90rem] mx-auto">
        <div className="">
          <Carousel plugins={['arrows', 'infinite']}>
            {selectedProduct?.images?.map((image: string, index: number) => (
              <img key={index} src={image} alt={image} />
            ))}
          </Carousel>
        </div>
        <div className="flex flex-col text-white self-start text-left bg-gray-800 rounded-xl p-8" key={selectedProduct?.id}>
          <div className="text-[30px] font-bold">{selectedProduct?.title}</div>
          <div className="text-[20px] pt-5 font-semibold">
            {selectedProduct?.brand}
          </div>
          <div className="pt-8 font-semibold">
            {selectedProduct?.description}
          </div>
          <div className="pt-5">
            <StarRatings
              rating={selectedProduct?.rating}
              starDimension="23px"
              starSpacing="15px"
              starRatedColor="gold"
            />{' '}
          </div>
          <div className="flex flex-col">
            <div className="flex font-bold text-[20px] bg-red-500 w-[50%] sm:w-[35%] justify-center p-2 mt-5 items-center rounded-lg">
              <div className="">-{selectedProduct?.discountPercentage} %</div>
            </div>
            <div className="flex gap-2 lg:gap-8 pt-5 items-center font-bold text-[20px]">
              {selectedProduct?.price &&
                selectedProduct?.discountPercentage &&
                calculateDiscountedPrice(
                  selectedProduct.price,
                  selectedProduct.discountPercentage
                ).discountedPrice.toFixed(0)}
              $<div className="line-through">{selectedProduct?.price} $</div>
              <div className="flex items-center">
                <Button
                  text={`${
                    !productsBasket.some(
                      (item) => item.id === selectedProduct?.id
                    )
                      ? 'Buy now'
                      : 'Delete from cart'
                  }`}
                  className={`px-16 py-3 ${
                    productsBasket.some(
                      (item) => item.id === selectedProduct?.id
                    )
                      ? '!bg-gray-500 !active:bg-gray-700 !hover:bg-gray-600'
                      : '!bg-blue-500 !active:bg-blue-700 !hover:bg-blue-600'
                  } `}
                  onClick={(e) =>
                    selectedProduct && handleItemBasket(e, selectedProduct)
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-8 pt-10 max-w-[90rem] mx-auto">
        {selectedProduct?.images.map((item, index) => (
          <div className="gap-5" key={index}>
            <img src={item} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};
