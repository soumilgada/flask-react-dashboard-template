import React, { Component } from 'react';
import { HashRouter, Route, Switch ,hashHistory} from 'react-router-dom';
import './App.scss';
import Home from './components/Home'
import DefaultLayout from './layouts/DefaultLayout'

// Containers
// const DefaultLayout = React.lazy(() => import('./layouts/DefaultLayout.jsx'));
// const Home = React.lazy(() => import('./components/Home.jsx'))
// Pages
// const Login = React.lazy(() => import('./views/Pages/Login'));
// const Register = React.lazy(() => import('./views/Pages/Register'));
// const Page404 = React.lazy(() => import('./views/Pages/Page404'));
// const Page500 = React.lazy(() => import('./views/Pages/Page500'));

class App extends Component {

  render() {
    return (
        <HashRouter history={hashHistory}>

          {/* <Route path='/' component={Home} /> */}
          <Route path="/" component={DefaultLayout} />

        </HashRouter>
    );
  }
}

export default App;
