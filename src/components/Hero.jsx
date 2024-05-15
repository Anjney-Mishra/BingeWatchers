import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { API_OPTIONS } from '../../constants'
import CardContainer from './CardContainer'
import CardContainerVer from './CardContainerVer'
import { Link } from 'react-router-dom'
import CardSkeleton from './CardSkeleton'

const Hero = () => {
    const [trending,setTrending] = useState([])
    const [nowplaying,setNowPlaying] = useState([])
    const [upcomming,setUpcomming] = useState([])
    const [tload,setTload] = useState(false)
    const [nload,setNload] = useState(false)
    const [uload,setUload] = useState(false)


    const fetchTrending = async() => {
        setTload(true)
        const res = await axios.get('https://api.themoviedb.org/3/trending/movie/day?language=en-IN/changes?page=2',API_OPTIONS)
        setTrending(res.data.results)
        setTload(true)
    }

    const fetchNowPlaying = async() => {
      setNload(true)
      const res = await axios.get("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",API_OPTIONS)
      setNowPlaying(res.data.results)
      setNload(false)

    }

    const fetchUpcomming = async() => {
      setUload(true)
      const res = await axios.get("https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",API_OPTIONS)
      setUpcomming(res.data.results)
      setTload(false)
    }

    useEffect(()=>{
        fetchTrending()
        fetchNowPlaying()
        fetchUpcomming()
    },[])


  return (
    <div className='mx-4'>
        <div>
        <h1 className='text-2xl font-bold text-center mb-8'>Trending Movies</h1>
        <CardContainer movies={trending}/> 
        </div>
        <div className='mt-20'>
        <Link to="/nowplaying" className='text-2xl font-bold'>NowPlaying Movies</Link>
        <CardContainer movies={nowplaying}/>
        </div>
        <div className='mt-20'>
        <Link to="/nowplaying" className='text-2xl font-bold'>Upcoming Movies</Link>
        <CardContainer movies={upcomming}/>
        </div>
    </div>
  )
}

export default Hero