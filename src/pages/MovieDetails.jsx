import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { API_OPTIONS, IMG_CDN } from '../../constants'
import NNavbar from '../components/NNavbar'
import { Image } from '@nextui-org/react'
import CardContainerVer from '../components/CardContainerVer'

const MovieDetails = () => {
    const {movieId} = useParams()

    const [movie,setMovie] = useState({})
    const [trailer,setTrailer] = useState("")
    const [recommend,setRecommend] = useState([])

    const fetchMovie = async() => {
        const res = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}language=en-US`,API_OPTIONS)
        setMovie(
            {
                title:res.data.title,
                poster_path:res.data.poster_path,
                overview:res.data.overview,
                genres:res.data.genres
            }
        )
    }

    const fetchTrailer = async() => {
        const res = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,API_OPTIONS)
        const vid = res.data.results;
        const trail = vid.filter((x)=>x.type="Trailer")
        setTrailer(trail[0].key)
    }

    const fetchRecommend = async() => {
        const res = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/recommendations?language=en-US&page=1`,API_OPTIONS)
        setRecommend(res.data.results)
    }

    useEffect(()=>{
        fetchMovie()
        fetchTrailer()
        fetchRecommend()

    },[movieId])

  return (
    <div>
        <NNavbar />
        <div>
            <div className="w-screen absolute top-[150] sm:top-[0] sm:left-0">
            {trailer && <iframe
                className="w-screen aspect-video"
                src={"https://www.youtube.com/embed/"+trailer+"?&autoplay=1&mute=1&controls=0&&showinfo=0&loop=1"}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>}
            </div>
            <div className='w-screen aspect-video pt-[15%] px-24 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='text-2xl sm:text-5xl font-bold'>{movie.title}</h1>
        {movie.overview && <p className='w-full sm:w-1/4 py-6 text-md sm:text-lg'>{movie.overview.slice(0,250)}...</p>}
        
        <div className='hidden sm:block'>
            <button className='bg-white px-16 text-xl text-black py-4 rounded-lg hover:bg-opacity-80'>Play</button>
            <button className='mx-2 bg-gray-500 px-16 text-xl text-white py-4 bg-opacity-50 rounded-lg'>More Info</button>
        </div>
        </div>
        </div>
        <div className='mt-[120%] h-auto sm:mt-[60%]'>
            <h1 className='text-3xl text-center font-bold mb-16'>Recommendation</h1>
            <div className='flex justify-center sm:mt-16'>
                {
                    recommend ? <CardContainerVer movies={recommend}/> : <h1>No Recommended Movies</h1>
                }
            </div>
        </div>
    </div>
  )
}

export default MovieDetails