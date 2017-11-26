import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import './scss/main.scss'

import Home from './screens/home'
import AssetDetails from './screens/assetDetails'

const App = () => (
  <div>
    <nav>
      <Link to="/">Home</Link>
    </nav>
    <div id="container">
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/:id" component={AssetDetails}/>
      </Switch>
    </div>
  </div>
)

ReactDOM.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>, document.getElementById('root'))