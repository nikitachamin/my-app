import {configureStore} from '@reduxjs/toolkit';



const reducer = (state = "light", action) => {

  switch (action.type) {

  case "SWITCHTODARK":
    return  'dark';

  case "SWITCHTOLIGHT":
    return  'light';

  default:
    return state
  }
};

const store = configureStore({
    reducer: reducer,
});

export default store;