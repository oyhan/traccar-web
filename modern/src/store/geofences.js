import { createSlice } from '@reduxjs/toolkit';

const { reducer, actions } = createSlice({
  name: 'geofences',
  initialState: {
    items: {},
  },
  reducers: {
    refresh(state, action) {
      state.items = {};
      action.payload.forEach((item) => state.items[item.id] = item);
    },
    update(state, action) {
      action.payload.forEach((item) => state.items[item.id] = item);
    },
    select(state,action) {
      console.log('action: ', action);
      state.selectedId = action.payload.id;
    }
  },
});

export { actions as geofencesActions };
export { reducer as geofencesReducer };
