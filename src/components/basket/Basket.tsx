import React from 'react';
import { useSelector } from 'react-redux';
import { selectSelectedProduct } from '../../store/selectedProductSlice';
import { Button } from '../button/Button';
import { Product } from '../../store/productsSlice';
import { RootState } from '../../store';
import { CartState } from '../../store/cartSlice';
import {
  calcTotalPrice,
  calcTotalPriceWithDiscount,
  calculateDiscountedPrice,
} from '../../helpers';
import { useNavigate } from 'react-router';

export const Basket = () => {
  const navigate = useNavigate();
  const productsBasket = useSelector(
    (state: RootState) => state.cart.itemsInCart
  );

  const handleNavigateOrder = () => {
    navigate('/order');
  };

  return (
    <div className="flex flex-col rounded-lg text-white min-w-[400px] bg-gray-800 w-full p-5 max-w-[340px]">
      {productsBasket?.length === 0 ? (
        <div className="text-white">Your cart is empty</div>
      ) : (
        <>
          {productsBasket.length !== 0 &&
            productsBasket?.map((product: Product) => (
              <div className="flex justify-between pt-3">
                <div>
                  <div className="text-[20px] font-bold">{product?.title}</div>
                </div>
                <div className="text-[20px] font-bold">
                  {product?.price &&
                    product?.discountPercentage &&
                    calculateDiscountedPrice(
                      product.price,
                      product.discountPercentage
                    ).discountedPrice.toFixed(0)}
                  $
                </div>
              </div>
            ))}
          <div className="flex justify-between border-t-2 mt-10 pt-3 border-gray-500">
            <div className="">Total:</div>
            <div>{calcTotalPriceWithDiscount(productsBasket).toFixed(0)}$</div>
          </div>
          <div className="pt-5">
            <Button
              text="MAKE ORDER"
              className="px-16 py-3 !bg-blue-500 justify-center !active:bg-blue-700 !hover:bg-blue-600"
              onClick={handleNavigateOrder}
            />
          </div>
        </>
      )}
    </div>
  );
};
