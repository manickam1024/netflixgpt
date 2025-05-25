import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { options } from '../../utils/constants'

const Maincontainer = () => {
  const select = useSelector((store) => store?.movieslice?.items)

  const [key, setkey] = useState([])

  if (!select) {
    return
  }
  const maincontainer = select[0]?.movies[0]
  const id = maincontainer?.id

  useEffect(() => {
    async function dataforvideo(params) {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${950387}/videos?language=en-US`,
        options
      )
      const json = await data.json()
      const filterdata = json.results.filter((f) => f.name == 'trailer')
      const trailer = !filterdata.length ? json.results[0] : filterdata[0]
      setkey(trailer.key)
    }
    dataforvideo()
  }, [])
  return (
    <div className="relative overflow-x-hidden">
      <iframe
        className="z-0 w-full h-screen scale-125 "
        src={`https://www.youtube.com/embed/${key}?autoplay=1&mute=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <div className="absolute top-0 w-full h-full  bg-gradient-to-t from-slate-950"></div>
      <div className="absolute w-full h-full bg-black"></div>
    </div>
  )
}

export default Maincontainer
