var React = require('react');
var Render = require('react-dom').render;
//var FluxCartApp = require('./user_js/User_Components/Routing/nav_bar_routing.react.js');

var { Router, Route, IndexRoute, Link, hashHistory } = require('react-router');

var MainLayout = React.createClass({
  render: function() {
    return (
      <div className="app">
        <header className="primary-header"></header>
        <aside className="primary-aside">
          <ul>
            <li><Link to="/">Post</Link></li>
            <li><Link to="/Favourites">Favourites</Link></li>
          </ul>
        </aside>
        <main>
          {this.props.children}
        </main>
      </div>
      )
  }
});

// var Home = React.createClass({
//   render: function() {
//     return (<h1>Home Page</h1>)
//   }
// });

// var SearchLayout = React.createClass({
//   render: function() {
//     return (
//       <div className="search">
//         <header className="search-header"></header>
//         <div className="results">
//           {this.props.children}
//         </div>
//         <div className="search-footer pagination"></div>
//       </div>
//       )
//   }
// });

var Post = React.createClass({
  render: function() {
    return (
      <ul className="user-list">
        <li>Dan</li>
        <li>Ryan</li>
        <li>Michael</li>
      </ul>
      )
  }
});

var Favourites = React.createClass({
  render: function() {
    return (
      <ul className="widget-list">
        <li>Widget 1</li>
        <li>Widget 2</li>
        <li>Widget 3</li>
      </ul>
      )
  }
});

// Note that with how CodePen works, I wasn't able to get the browserHistory to work
// as the article suggests. The demo works without it, but you'll want to be sure to 
// use it in a real application
// ReactDOM.render((
//   <Router>
//     <Route path="/" component={MainLayout}>
//       <IndexRoute component={Home} />
//       <Route component={SearchLayout}>
//         <Route path="users" component={UserList} />
//         <Route path="widgets" component={WidgetList} />
//       </Route> 
//     </Route>
//   </Router>
// )

// Render FluxCartApp Controller View
Render((
  <Router history={hashHistory}>
    <Route path="/" component={MainLayout}>
      <IndexRoute component={Post} />
      <Route >
        <Route path="Favourites" component={Favourites} />
      </Route> 
    </Route>
  </Router>
),document.getElementById('flux-cart')
);