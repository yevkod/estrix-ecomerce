import React from 'react';
import logo_icon from '../../assets/imgs/logo-icon.png';
import menu_left from '../../assets/imgs/menu-left.svg';
import basket from '../../assets/imgs/basket.svg';
import { clearSelectedProduct, setSelectedProduct } from '../../store/selectedProductSlice';
import { Product } from '../../store/productsSlice';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store';

export const HeaderView = () => {

  const dispatch: AppDispatch = useDispatch();

  const handleProductClick = () => {
    dispatch(clearSelectedProduct());
  };

  return (
    <div className="w-full h-[80px] p-3 bg-[#11101D]">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="cursor-pointer">
            <img src={logo_icon} alt="" />
          </div>
          <div className="text-white text-2xl font-bold cursor-pointer" onClick={handleProductClick}>
            eSTRIX Store
          </div>
          <div className="cursor-pointer">
            <img src={menu_left} alt="" />
          </div>
        </div>
        <div className="flex cursor-pointer">
          <img src={basket} alt="" className="w-8" />
        </div>
      </div>
    </div>
  );
};
