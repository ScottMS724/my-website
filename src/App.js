import React from 'react'
import NavBar from './components/NavBar'
import { Route } from 'react-router-dom'

class App extends React.Component {
    render() {
      return <div className="ui container">
        <Route path='/' component={NavBar} />
      </div>
    }
  };

export default App;