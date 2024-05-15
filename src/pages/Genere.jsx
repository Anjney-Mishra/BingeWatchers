import React, { useEffect, useState } from 'react'
import {Select, SelectItem} from "@nextui-org/react";
import NNavbar from '../components/NNavbar'
import axios from 'axios';
import { API_OPTIONS } from '../../constants';
import CardContainerVer from '../components/CardContainerVer';
import InfiniteScroll from 'react-infinite-scroll-component';
import CardSkeleton from '../components/CardSkeleton';

const Genere = () => {
    const [genres, setGenres] = useState([]);
    const [selectedGenre, setSelectedGenre] = useState('');
    const [movies, setMovies] = useState([]);
    const [page,setPage] = useState(1);
    const [loading,setLoading] = useState(false)

    const fetchGenres = async () => {
        try {
          const res = await axios.get(
            'https://api.themoviedb.org/3/genre/movie/list?language=en',
            API_OPTIONS
          );
          setGenres(res.data.genres);
        } catch (error) {
          console.error('Error fetching genres:', error);
        }
      };

    useEffect(() => {
    fetchGenres();
    }, []);


      const fetchMovies = async () => {
        try {
          setLoading(true)
          const res = await axios.get(
            `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc&with_genres=${selectedGenre.id}`,
            API_OPTIONS
          );
          setMovies(prev=>[...prev,...res.data.results]);
          setLoading(false)
        } catch (error) {
          console.error('Error fetching movies:', error);
        }
      };

      const fetchMoreData = () => {
        setPage(prev => prev + 1);
      };

    
      useEffect(() => {
        setMovies([])
        if (selectedGenre !== '') {
          fetchMovies(selectedGenre);
        }
      }, [selectedGenre]);

      useEffect(()=>{fetchMovies(selectedGenre)},[page])


  return (
    <div>
        <NNavbar/>
        <div>
            <div className={movies.length===0 ? 'h-[100vh] flex flex-col gap-32 items-center':'h-auto flex flex-col gap-32 items-center'}>
            <div className='w-[100vw] flex gap-2 justify-center items-center mt-14'>
                <Select
                label="Select Genre"
                placeholder="Select a genre"
                className="max-w-lg"
                >
                    {
                        genres.map((gen)=>(<SelectItem onClick={()=>setSelectedGenre(gen)} key={gen.name} value={gen.name}>{gen.name}</SelectItem>))
                    }
                </Select>
            </div>
                <div>
                <InfiniteScroll
                dataLength={movies.length}
                next={fetchMoreData}
                hasMore={true}
                >
                <CardContainerVer movies={movies} />
                </InfiniteScroll>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Genere