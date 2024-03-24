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

  return (
    <div className="bg-[#11101D] w-full h-full max-w-[260px] p-5">
      <div>
        <input
          placeholder="Search..."
          className="rounded-md px-4 py-2 bg-gray-400 placeholder:text-white outline-none text-white"
        />
      </div>
      <div className="flex flex-col pt-12 gap-5 w-full mx-auto">
        {buttons.map((item) => (
          <div
            className="flex flex-col mx-auto w-full max-w-[210px]"
            key={item.id}
          >
            <Button
              text={item.text}
              imgs={item.icon}
              className={`${item.active ? 'bg-slate-400' : 'bg-transparent'}`}
              onClick={() => {
                handleActiveButton(item.id);
                item.id === 0 && handleProductClick();
                item.id === 1 && handleAllItems();
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
