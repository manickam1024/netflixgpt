import { useEffect } from 'react'
import { browse_bg, options } from '../utils/constants'
import { addmovie } from '../utils/movieslice'
import { useDispatch, useSelector } from 'react-redux'

const Browse = () => {
  const dispatch = useDispatch()
  const d = useSelector((store) => store.movieslice.items)

  console.log(d)
  const url =
    'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1'
  useEffect(() => {
    async function tmdb() {
      try {
        const raw = await fetch(url, options)
        const data = await raw.json()
        dispatch(addmovie({ data }))
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
    tmdb()
  }, [])

  return (
    <div className="relative">
      <img
        src={browse_bg}
        alt="browse background"
        className="z-0 w-full h-screen object-cover"
      />
      <div className="absolute top-0 w-full h-full  backdrop-blur-sm z-10"></div>
      <div className="absolute top-0 w-full h-full  bg-gradient-to-t from-black"></div>
      <div className="absolute w-full h-full bg-black"></div>
    </div>
  )
}

export default Browse
