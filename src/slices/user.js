import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';

export const ROOT_STATE_NAME = 'user';
const initialState = {
  user: {
    data: null,
    status: 'idle', // or: 'loading', 'succeeded', 'failed'
    error: null,
  },
};

const userSlice = createSlice({
  name: ROOT_STATE_NAME,
  initialState,
  reducers: {
    login(state, action) {
      state.user.data = action.payload;
      state.user.status = 'succeeded';
      state.user.error = null;
    },
    logout(state) {
      state.user.data = null;
      state.user.status = 'idle';
      state.user.error = null;
    },
  },
});

// Extract the action creators object and the reducer
const { actions, reducer } = userSlice;
// Export the reducer, either as a default or named export
export default reducer;
// Extract and export each action creator by name
export const { createPost, updatePost, deletePost } = actions;
// Create and export each selector create by name
export const rootSelector = (state) => state[ROOT_STATE_NAME] || {};
export const userSelector = createSelector(rootSelector, ({ user }) => user);
