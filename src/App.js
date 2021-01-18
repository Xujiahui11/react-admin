import React, { Component } from 'react'
import { HashRouter, NavLink, Switch, Route } from 'react-router-dom'
import Home from './views/Home'
import About from './views/About'
import './App.css'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  render () {
    return (
      <HashRouter>
        <Switch>
          <Route exact component={Home} path='/' />
          <Route component={About} path='/about' />
        </Switch>
      </HashRouter>
    )
  }
}

export default App
