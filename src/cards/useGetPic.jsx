export const useGetPic = (array) => {
  const randomIndex = Math.floor(Math.random() * array.length);
  const imgSrc = array[randomIndex];
  return imgSrc;
};
