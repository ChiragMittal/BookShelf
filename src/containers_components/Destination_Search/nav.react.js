var React = require('react');
//var NavBarItem = require('./navbar.react.js');
//var MaterialUIAutocomplete =require('./sarch.react.js');
import App from './search.react.js';
//import {MaterialUIAutocomplete} from './sarch.react.js';

var NavBar = React.createClass({
  /* generateItem: function(item){
     return <NavBarItem text={item.text} url={item.url} hello={item.hello} />
   },*/
  render: function () {
    //var items = this.props.items.map(this.generateItem);
    return (
      <ul className="menu">
        <li className="logo" id="logo">
          {/* <a href="homepage.html"><img src="../img/logo-white.png" /></a> */}
        </li>
        <li className="search">

          <App placeHolder={"where to plan"} {...this.props} />
        </li>
        <li className="hello">
          <a href="../login.html">Sign In</a>
        </li>
        <li className="hello">
          <a href="../signup.html">Sign Up</a>
        </li>
      </ul>
    );
  }
});

module.exports = NavBar;