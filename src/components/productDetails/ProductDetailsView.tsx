import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectSelectedProduct,
  selectShowProductDetails,
} from '../../store/selectedProductSlice';
import StarRatings from 'react-star-ratings';
import Carousel, { autoplayPlugin } from '@brainhubeu/react-carousel';
import { AppDispatch, RootState } from '../../store';
import { Product } from '../../store/productsSlice';

export const ProductDetailsView = () => {
  const selectedProduct = useSelector(selectSelectedProduct);
  const dispatch: AppDispatch = useDispatch();
  const showProductDetails = useSelector(selectShowProductDetails);
  const products = useSelector((state: RootState) =>
    Object.values(state.products.entities)
  );

  return (
    <div className="min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="">
          <Carousel
            plugins={[
              'infinite',
              {
                resolve: autoplayPlugin,
                options: {
                  interval: 2000,
                },
              },
            ]}
            animationSpeed={1000}
          >
            {products.length > 0 &&
              products.map((item: Product) => (
                <>
                  {Array.isArray(item.images) &&
                    item.images.length > 0 &&
                    item.images.map((image, index) => (
                      <img key={index} src={image.images[0]} alt={item.title} />
                    ))}
                </>
              ))}
          </Carousel>
        </div>
        <div className="text-white text-left">
          <div className="text-[30px] font-bold">{selectedProduct?.title}</div>
          <div className="text-[20px] pt-5">{selectedProduct?.brand}</div>
          <div className="pt-8">{selectedProduct?.description}</div>
          <div className="pt-10">
            {}
            <StarRatings
              rating={selectedProduct?.rating}
              starDimension="23px"
              starSpacing="15px"
              starRatedColor="gold"
            />{' '}
          </div>
          <div className="pt-5 font-bold text-[20px]">
            {selectedProduct?.price} $
          </div>
        </div>
      </div>
    </div>
  );
};
