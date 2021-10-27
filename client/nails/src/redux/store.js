import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cartRedux'
import userSliceReducer from './userRedux'

export default configureStore ({
  reducer: {
    cart: cartReducer,
    user: userSliceReducer
  }

});

