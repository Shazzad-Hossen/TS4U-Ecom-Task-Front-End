import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isSignin: false,
  token: null
}

export const userSlice = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {
    
    userSignin: (state, action) => {
      state.isSignin= true,
      state.token= action.payload
    },
    userSignout: (state) => {
      state.isSignin= false,
      state.token= null
    },
  },
})

// Action creators are generated for each case reducer function
export const { userSignin, userSignout} = userSlice.actions

export default userSlice.reducer