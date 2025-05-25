import useNowMovieplaying from '../../hooks/useNowMovieplaying'
import Maincontainer from './maincontainer'

const Browse = () => {
  useNowMovieplaying()
  return (
    <div>
      <Maincontainer />
    </div>
  )
}

export default Browse
