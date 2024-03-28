import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { Button } from '../button/Button';
import { calcTotalPrice, calculateDiscountedPrice } from '../../helpers';
import { Product } from '../../store/productsSlice';
import { useNavigate } from 'react-router';

export const OrderView = () => {
  const navigate = useNavigate();
  const productsBasket = useSelector(
    (state: RootState) => state.cart.itemsInCart
  );

  const handleNavigateToProduct = (product: Product) => {
    navigate(`/items/${product.id}`);
  };

  const handleNavigateToMain = () => {
    navigate('/');
  };

  return (
    <div className="flex flex-col min-h-screen rounded-lg text-white bg-gray-800 w-full p-8">
      {productsBasket?.length === 0 ? (
        <>
          <div className="text-white font-bold text-2xl w-full bg-slate-700 max-w-[350px] mx-auto p-3 rounded-xl">
            Your cart is empty
          </div>
          <Button
            text="Buy new products"
            className="px-16 py-3 !bg-blue-500 mt-10 font-bold max-w-[250px] justify-center !active:bg-blue-700 !hover:bg-blue-600"
            onClick={handleNavigateToMain}
          />
        </>
      ) : (
        <div>
          <div className="flex justify-between border-b-2 p-3 mt-10 border-gray-500">
            <div className="flex items-center font-bold text-[18px]">
              Total:
            </div>
            <div className="flex items-center gap-5">
              <div className="font-bold text-[18px]">
                {calcTotalPrice(productsBasket)}$
              </div>
              <Button
                text="MAKE ORDER"
                className="px-16 py-3 !bg-blue-500 justify-center !active:bg-blue-700 !hover:bg-blue-600"
              />
            </div>
          </div>
          <div className="flex flex-col gap-5 pt-5">
            {productsBasket.length !== 0 &&
              productsBasket?.map((product: Product) => (
                <div
                  className="flex rounded-lg bg-gray-500 gap-5 p-3 hover:scale-105 cursor-pointer transition-all items-center justify-between"
                  onClick={() => handleNavigateToProduct(product)}
                >
                  <div className="flex w-36">
                    <img src={product.images[0]} alt="" />
                  </div>
                  <div className="flex">
                    <div className="text-[20px] font-bold">
                      {product?.title}
                    </div>
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
          </div>
        </div>
      )}
    </div>
  );
};
