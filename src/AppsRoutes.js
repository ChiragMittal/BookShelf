import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Route, Switch, Redirect } from 'react-router-dom'
import Home from './containers_components/Home'
import NoMatch from './containers_components/NoMatch'
import BookSearch from './containers_components/Search/index'
import CurrentlyReading from './containers_components/Shelves/Currently_Reading'


class AppsRoutes extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    let appProps = this.props;
    return (

      <Switch>
        {/* Will redirect to auth in booting app */}
        <Route exact path="/" render={(props) => (<Home {...appProps} />)} />
        <Route path="/search"  render={(props) => (<BookSearch {...appProps} />)} />
        <Route path="/currently-reading"  render={(props) => (<CurrentlyReading {...appProps} />)} />
        {/* <Route exact path="/destination/search" render={(props) => (<FluxCartApp {...appProps} />)} /> */}
        {/* Accessing auth directly will bring to login page */}
        <Route component={NoMatch} />
      </Switch>

    );
  }

}

AppsRoutes.propTypes = {
  Auth: PropTypes.object
}

export default AppsRoutes;
