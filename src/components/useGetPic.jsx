export const useGetPic = (dbArray) => {
  const [index, setIndex] = useState(0);

  const array = imagesData.{dbArray};

  const src = array[index].url;
  const name = array[index].name;

  // const [imageSrc, setImageSrc] = useState(src);
  // const [imageName, setImageName] = useState(name);

  return { src, name };

  // const imgSrc = array[index];
  // return imgSrc;
};
