import React, { useEffect } from 'react';
import { HeaderView } from '../../components/header/HeaderView';
import { NavbarView } from '../../components/navbar/NavbarView';
import { FooterView } from '../../components/footer/FooterView';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { fetchProducts } from '../../store/productsSlice';
import '@brainhubeu/react-carousel/lib/style.css';
import '../../App.css';
import { WelcomeView } from '../../components/welcome/WelcomeView';
import { NewItemsView } from '../../components/newItems/NewItemsView';
import { selectShowProductDetails } from '../../store/selectedProductSlice';
import { ProductDetailsView } from '../../components/productDetails/ProductDetailsView';

export const MainView = () => {

  const dispatch: AppDispatch = useDispatch();
  const showProductDetails = useSelector(selectShowProductDetails);
  const products = useSelector((state: RootState) =>
    Object.values(state.products.entities)
  );

  console.log('products', products[0]);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="MainView bg-gradient-to-t from-white to-black">
      <div className="header">
        <HeaderView />
      </div>
      <div className="navbar">
        <NavbarView />
      </div>
      <div className="flex flex-col p-16 main relative w-full">
        {showProductDetails ? (
          <ProductDetailsView />
        ) : (
          <>
            <WelcomeView />
            <NewItemsView />
          </>
        )}
      </div>
      <div className="footer">
        <FooterView />
      </div>
    </div>
  );
};
