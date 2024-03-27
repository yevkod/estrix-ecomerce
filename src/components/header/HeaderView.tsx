import React from 'react';
import logo_icon from '../../assets/imgs/logo-icon.png';
import menu_left from '../../assets/imgs/menu-left.svg';
import basket from '../../assets/imgs/basket.svg';
import {
  clearSelectedProduct,
} from '../../store/selectedProductSlice';
import { Product } from '../../store/productsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { Basket } from '../basket/Basket';
import { setShowBasket } from '../../store/cartSlice';
import { useNavigate } from 'react-router';

export const HeaderView = () => {
  const dispatch: AppDispatch = useDispatch();
  const showBasket = useSelector((state: RootState) => state.cart.showBasket);
  const showBasketView = useSelector(setShowBasket);
  const navigate = useNavigate();

  const handleProductClick = () => {
    navigate(`/`);
    dispatch(clearSelectedProduct());
  };

  const handleShowBasketClick = () => {
    dispatch(setShowBasket(!showBasket));
  };

  return (
    <div className="w-full relative h-[80px] p-3 bg-[#11101D]">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="cursor-pointer">
            <img src={logo_icon} alt="" />
          </div>
          <div
            className="text-white text-2xl font-bold cursor-pointer"
            onClick={handleProductClick}
          >
            eSTRIX Store
          </div>
          <div className="cursor-pointer">
            <img src={menu_left} alt="" />
          </div>
        </div>
        <div className="flex cursor-pointer" onClick={handleShowBasketClick}>
          <img src={basket} alt="" className="w-8" />
        </div>
        {showBasket && (
          <div className="absolute right-10 top-20 z-[100]">
            <Basket />
          </div>
        )}
      </div>
    </div>
  );
};
