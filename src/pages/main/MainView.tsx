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
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ItemsView } from '../../components/items/ItemsView';
import { Basket } from '../../components/basket/Basket';
import { OrderView } from '../../components/order/OrderView';
import { AboutView } from '../../components/about/AboutView';
import { randomOrderNumber } from '../../helpers';
import { BankCard } from '../../components/BankCard/BankCard';
import { useLocation } from 'react-router-dom';

export const MainView = () => {
  const dispatch: AppDispatch = useDispatch();
  const showProductDetails = useSelector(selectShowProductDetails);
  const products = useSelector((state: RootState) =>
    Object.values(state.products.entities)
  );

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(fetchProducts());
  }, []);

  return (
    <div className="MainView bg-gradient-to-t from-white to-black">
      <Router>
        <div className="header z-[100]">
          <HeaderView />
        </div>
        <div className="navbar">
          <NavbarView />
        </div>
        <div className="flex flex-col min-h-screen p-16 main relative w-full">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <WelcomeView />
                  <NewItemsView />
                </>
              }
            />
            <Route path="/items/:id" element={<ProductDetailsView />} />
            <Route path="/products" element={<ItemsView />} />
            <Route path="/order" element={<OrderView />} />
            <Route path="/about" element={<AboutView />} />
            <Route
              path={`/payment/${randomOrderNumber}`}
              element={<BankCard />}
            />
          </Routes>
        </div>
        <div className="footer">
          <FooterView />
        </div>
      </Router>
    </div>
  );
};
