import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './views/App'
import store from './config/store'
import './index.scss'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
