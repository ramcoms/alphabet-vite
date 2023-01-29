import { useEffect, useState } from 'react';
import { createClient } from 'pexels';

export const useFetch = (keyword, page) => {
  const [imageData, setImageData] = useState([]);

  useEffect(() => {
    const fetchImage = async () => {
      const res = await fetch(
        `https://api.pexels.com/v1/search?query=${keyword}&page=${page}&per_page=1&orientation=landscape`,
        {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            Authorization:
              'VcWtUfcIkTNYIZ8RddiYuVwZ4FiRKZ8A37XnXedTPNtoDKZe6vgv7DOJ',
          },
        }
      );
      const data = await res.json();
      setImageData(data.photos[0].url);
    };

    fetchImage();
  }, []);

  return { imageData };
};
