import React from 'react';
//var { Router, Route, IndexRoute, Link, hashHistory } = require('react-router');
import * as userAPI from '../../APIs/user'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import FluxCount from './follow.react.js';
import FluxInfo from './info.react.js';
import FluxPictures from './pictures.react.js';
import MultiPost from './Routing/multiPost.react'
import FavouriteDestinations from './favourites_destination'


//import NpsForecastMap from './container.react.js';
import { Grid, Row, Col } from 'react-bootstrap';


// Method to retrieve state from Stores

// Define main Controller View
class FluxUserApp extends React.Component {

  componentDidMount() {
    let _this = this
    userAPI.recieveInfo(_this.props.Auth.username, _this.props.Auth.token, _this.props.Auth.target)
      .then((res) => {
        //console.log(JSON.stringify(_this.props))
        _this.props.recieveInfo(res.info);
        //_this.props.receiveProduct(res.response);
      })

    userAPI.recievePost(_this.props.Auth.username, _this.props.Auth.token, _this.props.Auth.target)
      .then((res) => {
        //console.log(JSON.stringify(_this.props))
        _this.props.loadPost(res.post);
        //_this.props.receiveProduct(res.response);
      })

  }

  // Remove change listeners from stores
  componentWillUnmount() {

  }

  render() {
    let { User } = this.props
    // console.log('Destination ' + JSON.stringify(Destination))
    return (User && Object.keys(User.info).length) ? this.renderResults() : this.renderInitial()
  }

  renderInitial() {
    return (
      <div className="flux-user-app">
        <h1>Initial page</h1>
      </div>
    )
  }

  // Render our child components, passing state via props
  renderResults() {
    switch (this.props.history.location.pathname) {
      case '/user':
        var subSection = <MultiPost {...this.props} posts={this.props.User.post} />
        break
      case '/user/favourites':
        var subSection = <FavouriteDestinations {...this.props} />
        break
      default:
        var subSection = <MultiPost {...this.props} posts={this.props.User.post} />
    }
    return (
      <div className="flux-user-app">


        <Grid>
          <Row className="show-grid">
            <Col md={3} className="text-center profile_part">

              <FluxPictures {...this.props} img={this.props.User.img} />
              <FluxInfo  {...this.props} username={this.props.User.info.username} fname={this.props.User.info.fname} lname={this.props.User.info.lname} dob={this.props.User.info.dob} info={this.props.User.info.info} />
              <FluxCount  {...this.props} follow_count={this.props.User.info.follow_count} following_count={this.props.User.info.following_count} favourites_count={this.props.User.info.favourites_count} />
            </Col>

            <Col md={5} mdOffset={4}>
              <ul>
                <li><Link to="/user">Post</Link></li>
                <li><Link to="/user/favourites">Favourites</Link></li>
              </ul>
            </Col>

            <Col md={5} mdOffset={4}>
              <main>
                {subSection}
              </main>
            </Col>


          </Row>
        </Grid>
      </div>

    );
  }

  // Method to setState based upon Store changes

};

const mapState = state => ({
  Auth: state.Auth,
  User: state.User
})

export default connect(mapState)(FluxUserApp);
