import React, { useState, useEffect } from 'react';
import NNavbar from '../components/NNavbar';
import CardContainerVer from '../components/CardContainerVer';
import axios from 'axios';
import { API_OPTIONS } from '../../constants';
import InfiniteScroll from 'react-infinite-scroll-component';
import CardSkeleton from '../components/CardSkeleton';

const NowPlaying = () => {
  const [page, setPage] = useState(1);
  const [nowplaying, setNowPlaying] = useState([]);

  const fetchNowPlaying = async () => {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${page}`,
        API_OPTIONS
      );
      setNowPlaying(prev => [...prev, ...res.data.results]);
    } catch (error) {
      console.error('Error fetching now playing movies:', error);
    }
  };

  const fetchMoreData = () => {
    setPage(prev => prev + 1);
  };

  useEffect(() => {
    fetchNowPlaying();
  }, [page]);


  return (
    <>
      <NNavbar />
      <h1 className="text-2xl font-bold text-center mb-8">Now Playing Movies</h1>
      <InfiniteScroll
        dataLength={nowplaying.length}
        next={fetchMoreData}
        hasMore={true}
        loader={<h4>Loading...</h4>}
      >
        <CardContainerVer movies={nowplaying} />
      </InfiniteScroll>
    </>
  );
};

export default NowPlaying;
