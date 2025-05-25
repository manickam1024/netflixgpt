import { addmovie } from '../utils/movieslice'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { options } from '../utils/constants'

function useNowMovieplaying() {
  const dispatch = useDispatch()

  const url =
    'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1'
  useEffect(() => {
    async function tmdb() {
      try {
        const raw = await fetch(url, options)
        const data = await raw.json()
        dispatch(addmovie({ movies: data.results }))
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
    tmdb()
  }, [])
}

export default useNowMovieplaying
