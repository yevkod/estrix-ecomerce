import React from 'react';
import logo_icon from '../../assets/imgs/logo-icon.png';
import menu_left from '../../assets/imgs/menu-left.svg';
import basket from '../../assets/imgs/basket.svg';
import { clearSelectedProduct } from '../../store/selectedProductSlice';
import burger from '../../assets/imgs/burgerIcon.svg';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { Basket } from '../basket/Basket';
import { setShowBasket } from '../../store/cartSlice';
import { useNavigate } from 'react-router';

interface HeaderViewProps {
  menu: boolean;
  setMenu: (menu: boolean) => void;
}

export const HeaderView: React.FC<HeaderViewProps> = ({ menu, setMenu }) => {
  const dispatch: AppDispatch = useDispatch();
  const showBasket = useSelector((state: RootState) => state.cart.showBasket);
  const navigate = useNavigate();
  const productsBasket = useSelector(
    (state: RootState) => state.cart.itemsInCart
  );

  const handleProductClick = () => {
    navigate(`/`);
    dispatch(clearSelectedProduct());
  };

  const handleShowBasketClick = () => {
    dispatch(setShowBasket(!showBasket));
  };

  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className="w-full fixed h-[80px] p-3 bg-[#11101D]">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="cursor-pointer">
            <img src={logo_icon} alt="" />
          </div>
          <div
            className="text-white lg:text-2xl font-bold cursor-pointer"
            onClick={handleProductClick}
          >
            eSTRIX Store
          </div>
          <div className="hidden lg:flex cursor-pointer">
            <img src={menu_left} alt="" />
          </div>
        </div>
        <div className="flex relative gap-3 cursor-pointer">
          <img
            src={basket}
            alt=""
            className="w-8"
            onClick={handleShowBasketClick}
          />
          {productsBasket.length !== 0 && (
            <div className="flex absolute items-center text-white text-center justify-center bg-red-500 w-6 rounded-full">
              {productsBasket.length}
            </div>
          )}
          <div
            className="flex md:hidden justify-end w-10 cursor-pointer"
            onClick={handleMenu}
          >
            <img src={burger} alt="burger" />
          </div>
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
