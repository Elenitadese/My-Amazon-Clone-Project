

import React,{createContext} from "react";
import { useReducer } from "react";

export const DataContext = createContext()
// create context initiated


 export const DataProvider = ({children, reducer, initialState})=>{
    // data provider function initiated and exported to be available

    // it returns values that to be provided
    // passed as props , we pass our use ruducer which  require reducer and initial state it return state and dispatch
    return(
        <DataContext.Provider value={useReducer(reducer, initialState)}>

            {children}

        </DataContext.Provider>
    )
 } 

//  then we go to upper component  main.jsx and wrap our app by data provider
// for children we pass app
// 