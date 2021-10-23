import React from 'react'
import ReactDOM from 'react-dom'
import App from './views/App'
import './index.scss'
import store from './config/store'
import { Provider } from 'react-redux'

class Main {
  static loadView() {
    ReactDOM.render(
      <React.StrictMode>
        <Provider store={store}>
          <App />
        </Provider>
      </React.StrictMode>,
      document.getElementById('root')
    )
  }

  static main() {
    Main.loadView()
  }
}

Main.main()
