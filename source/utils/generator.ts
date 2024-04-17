export const discountCalculator = (price: number, discountPrice: number) => {
  const discount = price - discountPrice;
  const percent = (discount / price) * 100;
  return percent;
};

