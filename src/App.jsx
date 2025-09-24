 import React, { useContext, useEffect } from 'react'
 import Routing from './Routing'
 import { DataContext } from './Components/DataProvider/DataProvider'
 import { Type } from './Utility/action.type'
 import { auth } from './Utility/FireBase'
 function App() {
  const[{user}, dispatch] = useContext(DataContext)

useEffect(() => {
  const unsubscribe = auth.onAuthStateChanged((authuser) => {
    if (authuser) {
      dispatch({ type: Type.SET_USER, user: authuser });
    } else {
      dispatch({ type: Type.SET_USER, user: null });
      dispatch({ type: Type.EMPTY_BASKET }); // Optional: clear basket
    }
  });

  return () => unsubscribe();
}, []);

  
   return (
     <>
      < Routing/>
     </>
   )
 }
 
 export default App

 