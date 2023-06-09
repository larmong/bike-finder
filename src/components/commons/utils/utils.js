export const getPrice = (price) => {
  const newPrice = price.toLocaleString("ko-KR");
  return `${newPrice}`;
};

export const getBirth = (date) => {
  const yyyy = date.slice(0, 4);
  const mm = date.slice(4, 6);
  const dd = date.slice(6, 8);

  return `${yyyy}-${mm}-${dd}`;
};

export const getPhone = (phoneNum) => {
  const first = phoneNum.slice(0, 3);
  const second = phoneNum.slice(3, 7);
  const third = phoneNum.slice(7, 11);

  return `${first}-${second}-${third}`;
};

export const getAddress = (address) => {
  const zipcode = address.zipcode;
  const addressFirst = address.addressFirst;
  const addressSecond = address.addressSecond;

  return `(${zipcode}) ${addressFirst}, ${addressSecond}`;
};

export const getDate = (date) => {
  const sliceDate = String(date.slice(0, 10));
  return `${sliceDate}`;
};
