export const calculateDiscountedPrice = (price: number, discountPercentage: number) => {
    const discountedPrice = price * (1 - discountPercentage / 100);
    const discountAmount = price - discountedPrice;
    return {
        discountedPrice: discountedPrice,
        discountAmount: discountAmount
    };
};