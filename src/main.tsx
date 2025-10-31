import React from 'react'
import ReactDOM from 'react-dom/client'

// Choose ONE App to focus on during class:
// import App from './App_mui'
import App from './App_antd'
// import App from './App_antd_themed'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
