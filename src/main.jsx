 import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { HashRouter } from 'react-router-dom'
import { DataProvider } from './Components/DataProvider/DataProvider.jsx'
import { initialState, reducer } from './Utility/Reducer.js'
// this props passed reducer={reducer} initialState={initialState}> they come from  reducer  so we import them

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DataProvider reducer={reducer} initialState={initialState}>
      <HashRouter>
        <App />
      </HashRouter>
    </DataProvider>
  </StrictMode>
)

// +then we have to take action on our button and have to add our cart