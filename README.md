#### studied from Piyush garg react redux toolkit youtube video 29minute
https://www.youtube.com/watch?v=fxT54eRIsc4
https://github.com/piyushgargdev-01/react-redux-toolkit
#### Thanks Piyush garg sir for amezing content 
![Screenshot 2024-04-04 192304](https://github.com/mishrasatyapriya9/Redux_Basics_use/assets/106869525/34bfb4b1-20d9-413a-b785-b09eacd2752e)

![Screenshot 2024-04-04 192250](https://github.com/mishrasatyapriya9/Redux_Basics_use/assets/106869525/20338916-70c7-49c5-9c20-ff1e1eccaed1)
![Screenshot 2024-04-04 192348](https://github.com/mishrasatyapriya9/Redux_Basics_use/assets/106869525/13ca62c5-f205-42a2-b097-11522f3c1627)
![Screenshot 2024-04-04 192405](https://github.com/mishrasatyapriya9/Redux_Basics_use/assets/106869525/9bf71467-be06-45de-8e49-da8c3c96d38e)
![Screenshot 2024-04-04 192507](https://github.com/mishrasatyapriya9/Redux_Basics_use/assets/106869525/c0bea063-3fd8-4094-804b-b1224a9365d7)


 &nbsp
 <br/>
# To avoid prop drilling
this is single source of store
# instalation 
npm  install redux toolkit all things
npm i @reduxjs/toolkit react-redux

&nbsp
 <br/>

#### step-1 create redux store 

import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    //counter: counterSlice,
  },
});


#### Step-2 in index.js ,wrap with provider (store)


import { Provider } from "react-redux";
import { store } from "./redux/store";
.
.
.
<React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>

#### step-3 create slice (every slice is a function (like function,comment function all are can be slices))

import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  initialState: 0,
  name: "counter",
  reducers: {
    increment: (state) => state + 1,
    decrement: (state) => state - 1,
  },
});

export const { decrement, increment } = counterSlice.actions;
export default counterSlice.reducer;

#### step-4 update reducer in the store 

import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counter";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
});

#### step-5 //in typescript create hooks for use useSelectore and useDispatch in hooks/index.ts

import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import type { RootState, AppDispatch } from "../store";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

#### step-6 Now in the app.js make components 

import React from "react";
import "./App.css";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { increment, decrement } from "./redux/slices/counter";
import MyComp from "./MyComp";

function App() {
  const count = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  return (
    <div className="App">
      <header className="App-header">
        <h1>Count is {count}</h1>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </header>

      <MyComp />
    </div>
  );
}

export default App;

#### step-6 //if any other component subscribed to our store then they got real time values from the update in the store by any other components also

//MyComp.ts
import React from "react";
import { useAppSelector } from "./redux/hooks";

const MyComp: React.FC = () => {
  const count = useAppSelector((s) => s.counter);

  return <h1>MyCom: {count}</h1>;
};

export default MyComp;


#### step-7 we can  also use Zustand but it is autocontrolled and in react redux we have to do from scratch code 

