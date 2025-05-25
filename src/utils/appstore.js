import slicereducer from './slice'
import movieslicereducer from './movieslice'
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
  reducer: {
    authentication: slicereducer,
    movieslice: movieslicereducer,
  },
})

export default store
