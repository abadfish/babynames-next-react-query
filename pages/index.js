import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from '../src/views/Home'

function SafeHydrate({ children }) {
  return (
    <div suppressHydrationWarning> 
      {typeof document === 'undefined' ? null : children}
    </div>
  )
}

export default function App() {
  return (
    <SafeHydrate>
      <Router>
        <Switch>
          <Route exact path="/" component={ Home }/>
        </Switch>
      </Router>
    </SafeHydrate>
  )
}