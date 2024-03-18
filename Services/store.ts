import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import userDetailsReducer from '../Services/UserDetailsSlice/UserDetailsSlice';

// Create the Redux store
const store = configureStore({
  reducer: {
    userDetails: userDetailsReducer,
    // You can add other reducers here
  },
});

export default store;