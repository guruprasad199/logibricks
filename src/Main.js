import React, { Component } from 'react'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Imp from './Pages/Imp';
import Page1 from './Pages/Page1'
import Page2 from './Pages/Page2'


export default class Main extends Component {
    render() {
        return (
            <div>
                <h1 style={{background:"green", color:"white"}}>Welcome To Logibricks Task</h1>
                <BrowserRouter>
      <div style={{backgroundColor: 'aqua', margin: '30px', padding: '40px', textAlign: 'center'}}>
        <nav>
        
            <span><Link to="/page1"><button>Page1</button></Link></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span><Link to="/page2"><button>Page2</button></Link></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span><Link to="/imp"><button>Imp info</button></Link></span>
          
        </nav>
        </div>
        
        <Switch>
          <Route path="/page1">
            <Page1 />
          </Route>
          <Route path="/page2">
            <Page2 />
          </Route>
          <Route path="/imp">
          <Imp/>
          </Route>
        </Switch>


    </BrowserRouter>

            </div>
        )
    }
}
