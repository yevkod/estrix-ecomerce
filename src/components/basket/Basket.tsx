import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '../button/Button';
import { Product } from '../../store/productsSlice';
import { RootState } from '../../store';
import { deleteItemFromCart, setShowBasket } from '../../store/cartSlice';
import {
  calcTotalPriceWithDiscount,
  calculateDiscountedPrice,
} from '../../helpers';
import { useNavigate } from 'react-router';
import cancelButton from '../../assets/imgs/cancel.svg';


export const Basket= () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const productsBasket = useSelector(
    (state: RootState) => state.cart.itemsInCart
  );

  const handleNavigateOrder = () => {
    dispatch(setShowBasket(false));
    navigate('/order');
  };

  const handleCancelItem = (
    e: React.MouseEvent<HTMLImageElement>,
    id: number
  ) => {
    e.stopPropagation();
    dispatch(deleteItemFromCart(id));
  };

  return (
    <div className="flex flex-col rounded-lg text-white w-full min-w-[250px] lg:min-w-[400px] bg-gray-800 p-5">
      {productsBasket?.length === 0 ? (
        <div className="text-white">Your cart is empty</div>
      ) : (
        <>
          {productsBasket.length !== 0 &&
            productsBasket?.map((product: Product) => (
              <div className="flex justify-between gap-3 pt-3 break-all">
                <div>
                  <div className="text-[20px] font-bold text-left">
                    {product?.title}
                  </div>
                </div>
                <div className="flex gap-3 items-center">
                  <div className="text-[20px] font-bold">
                    {product?.price &&
                      product?.discountPercentage &&
                      calculateDiscountedPrice(
                        product.price,
                        product.discountPercentage
                      ).discountedPrice.toFixed(0)}
                    $
                  </div>
                  <div className="flex cursor-pointer">
                    <img
                      className="flex w-4"
                      src={cancelButton}
                      alt=""
                      onClick={(e) => handleCancelItem(e, product.id)}
                    />
                  </div>
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
