import { useEffect } from 'react'
import { browse_bg, options } from '../utils/constants'

const Browse = () => {
  useEffect(() => {
    async function tmdb() {
      try {
        const raw = await fetch(
          'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
          options
        )
        const data = await raw.json()
        console.log(data)
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
