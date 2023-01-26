import { useState, useEffect } from 'react';

export const useFetch = (array) => {
  const [images, setImages] = useState([]);
  const [fetchError, setFetchError] = useState(null);

  const uri = `http://localhost:3000/${array}`;

  useEffect(() => {
    const fetchImages = async () => {
      const res = await fetch(uri);
      const data = await res.json();

      setImages(data);
    };

    fetchImages();
  }, []);

  console.log(images);

  return { images };
};
