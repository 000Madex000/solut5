import { createSlice } from '@reduxjs/toolkit';


export const userNameSlice = createSlice({
		name: 'userName',
    initialState: '',
    reducers: {
        changeName: (state,action)=> {
          const user = action.payload
          return user
        }
    }
})

export const { changeName } = userNameSlice.actions;

export default userNameSlice.reducer;