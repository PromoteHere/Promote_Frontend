import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the initial state for the slice
interface UserDetailsState {

}

const initialState: UserDetailsState = {

};

// Create a slice
const UserDetails = createSlice({
  name: 'UserDetails',
  initialState,
  reducers: {

    // You can define other actions here
  },
});

// Export actions and reducer
export const {  } = UserDetails.actions;
export default UserDetails.reducer;
