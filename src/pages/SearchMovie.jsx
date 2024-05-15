import React, { useEffect, useState } from 'react'
import NNavbar from '../components/NNavbar'
import { Button, Input } from '@nextui-org/react'
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";
import axios from 'axios';
import { API_OPTIONS } from '../../constants';
import CardContainerVer from '../components/CardContainerVer';
import CardSkeleton from '../components/CardSkeleton';

const SearchMovie = () => {
    const [searchtext,setSearchText] = useState("")
    const [movie,setMovie] = useState([])
    const [loading,setLoading] = useState(false)

    const fetchSearch = async() => {
        setLoading(true)
        const res = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${searchtext}&include_adult=false&language=en-US&page=1`,API_OPTIONS);
        setMovie(res.data.results)
        setLoading(false)
    }

    const handleKeyPress = (e) => {
      if (e.key === 'Enter') {
          fetchSearch();
      }
  }


  return (
    <div>
        <NNavbar/>
        <div className={movie.length===0 ? 'h-[100vh] flex flex-col gap-32 items-center':'h-auto flex flex-col gap-32 items-center'}>
        <div className='w-[100vw] flex gap-2 justify-center items-center mt-14'>
        <Input
        type="text"
        label="Search Movie"
        className="max-w-lg"
        onChange={(e)=>setSearchText(e.target.value)}
        onKeyDown={handleKeyPress}
        />
        <Button size='lg' onClick={fetchSearch} color='danger'>Search</Button>
        </div>
        <div >
        {
            loading ?
            <div className='h-[100vh] flex justify-center'>
            <div className="gap-2 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-5">
              <CardSkeleton/>
              <CardSkeleton/>
              <CardSkeleton/>
              <CardSkeleton/>
              <CardSkeleton/>
              <CardSkeleton/>
              <CardSkeleton/>
              <CardSkeleton/>
              <CardSkeleton/>
              <CardSkeleton/>
            </div>
            </div> :
                    
            movie.length>0 ? <CardContainerVer movies={movie}/> : <h1>No Movies Found</h1>
                    

        }

        </div>
        </div>
    </div>
  )
}

export default SearchMovie