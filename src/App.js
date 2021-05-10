import React from 'react'
import NavBar from './components/NavBar'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import { Route } from 'react-router-dom'

class App extends React.Component {
    render() {
      return <div className="ui container">
        <Route path='/' component={NavBar} />
        <Route path='/home' exact component={Home} />
        <Route path='/about' exact component={About} />
        <Route path='/projects' exact component={Projects} />
        <Route path='/contact' exact component={Contact} />
      </div>
    }
  };

export default App;