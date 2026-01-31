import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// import store from './ReduxLegacy/Store.jsx'
import storee from './ReduxToolkit/Storee.jsx'
import {Provider} from 'react-redux'
createRoot(document.getElementById('root')).render(
    <Provider store = {storee}>
    <App />
    </Provider>
    
  

)
