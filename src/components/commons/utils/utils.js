export const getPrice = (price) => {
  const newPrice = price.toLocaleString("ko-KR");
  return `${newPrice}`;
};
