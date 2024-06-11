import { configureStore } from '@reduxjs/toolkit';
import Authreducer from '../reducers/Authreducer'
import Todoreducer from '../reducers/Tododreducer'
export const store = configureStore({
  reducer: {
    user: Authreducer,
    todos: Todoreducer
  },
});
