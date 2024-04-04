import React from 'react';
import { Button } from '../button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { selectButtons, setActiveButton } from '../../store/mainSlice';
import { AppDispatch, RootState } from '../../store/index';
import { clearSelectedProduct } from '../../store/selectedProductSlice';
import { useNavigate } from 'react-router';

interface BurgerMenuViewProps {
  setMenu: (value: boolean) => void;
}

export const BurgerMenuView: React.FC<BurgerMenuViewProps> = ({ setMenu }) => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const buttons = useSelector((state: RootState) => selectButtons(state));

  const handleProductClick = () => {
    setMenu(false);
    dispatch(clearSelectedProduct());
    navigate(`/`);
  };

  const handleActiveButton = (id: number) => {
    setMenu(false);
    dispatch(setActiveButton({ id }));
  };

  const handleAllItems = () => {
    setMenu(false);
    navigate(`/products`);
  };

  const handleAbout = () => {
    setMenu(false);
    navigate(`/about`);
  };

  return (
    <div className="flex z-50 flex-col py-10 min-h-screen px-10 shadow-md rounded-lg">
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
