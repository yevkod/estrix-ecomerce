import React from 'react';
import { Button } from '../button/Button';
import { navbarArray } from './NavbarArray';
import { AppDispatch } from '../../store';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/index';
import { selectButtons, setActiveButton } from '../../store/mainSlice';
import { clearSelectedProduct } from '../../store/selectedProductSlice';
import { useNavigate } from 'react-router';

export const NavbarView: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const buttons = useSelector((state: RootState) => selectButtons(state));

  const handleProductClick = () => {
    dispatch(clearSelectedProduct());
    navigate(`/`);
  };

  const handleActiveButton = (id: number) => {
    dispatch(setActiveButton({ id }));
  };

  const handleAllItems = () => {
    navigate(`/products`);
  };

  const handleAbout = () => {
    navigate(`/about`);
  };

  return (
    <div className="bg-[#11101D] w-full h-full max-w-[260px] p-5">
      <div className="flex flex-col pt-8 gap-5 w-full mx-auto">
        {buttons.map((item) => (
          <div
            className="flex flex-col mx-auto w-full max-w-[250px]"
            key={item.id}
          >
            <Button
              text={item.text}
              imgs={item.icon}
              className={`${
                item.active ? 'bg-slate-400' : 'bg-transparent'
              } px-6`}
              onClick={() => {
                handleActiveButton(item.id);
                item.id === 0 && handleProductClick();
                item.id === 1 && handleAllItems();
                item.id === 2 && handleAbout();
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
