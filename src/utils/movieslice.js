import { createSlice } from '@reduxjs/toolkit'

const movieslice = createSlice({
  name: 'movieslice',
  initialState: { items: [] },
  reducers: {
    addmovie: (state, action) => {
      state.items.push(action.payload)
    },
    removemovie: (state) => {
      state.items.pop()
    },
  },
})
export const { addmovie, removemovie } = movieslice.actions
export default movieslice.reducer
