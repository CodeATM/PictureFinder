// pages/infinite-scroll.js
import { useState, useEffect } from 'react';
import axios from 'axios';

const InfiniteScroll = ({ initialData }) => {
  const [photos, setPhotos] = useState(initialData);5
  const [page, setPage] = useState(2); // Start from the second page

  const fetchMorePhotos = async () => {
    try {
      const response = await axios.get(
        `https://api.unsplash.com/photos?page=${page}&client_id=YOUR_UNSPLASH_API_KEY`
      );
      const newPhotos = response.data;
      setPhotos(prevPhotos => [...prevPhotos, ...newPhotos]);
      setPage(prevPage => prevPage + 1);
    } catch (error) {
      console.error('Error fetching photos:', error);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
      ) {
        fetchMorePhotos();
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [photos]); // Include photos as a dependency to prevent multiple fetches

  return (
    <div>
      {photos.map(photo => (
        <img key={photo.id} src={photo.urls.small} alt={photo.alt_description} />
      ))}
    </div>
  );
};

export async function getServerSideProps() {
  try {
    const response = await axios.get(
      `https://api.unsplash.com/photos?page=1&client_id=YOUR_UNSPLASH_API_KEY`
    );
    const initialData = response.data;
    return {
      props: {
        initialData,
      },
    };
  } catch (error) {
    console.error('Error fetching initial photos:', error);
    return {
      props: {
        initialData: [],
      },
    };
  }
}

.grid {
  display: grid;
  padding: 3rem 1rem;
  grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));

  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    padding: 3rem 0;
  }
}

.grid__item {
  list-style: none;
  padding: 1rem;

  @media only screen and (max-width: 768px) {
    padding: 0.5rem 0;
  }
}

.grid__image {
  -o-object-fit: cover;
  object-fit: cover;
  width: 100%;
  height: 100%;
}
.grid__image:hover {
  filter: sepia(50%);
}
export default InfiniteScroll;
