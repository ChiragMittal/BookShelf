import React, { Component } from 'react';
import { render } from 'react-dom';
// Import routing components
import {Router, Route} from 'react-router';

import FluxSinglePost from ;
import FluxMultiPost from ;
import FluxSingleFavourites from ;
import FluxMultiFavourites from ;

render(
    <Router>
        <Route path="/" component={FluxMultiPost}/>
        <Route path="/favs" component={FluxMultiFavourites}/>
        //<Route path="/about" component={About}/>
    </Router>,
    document.getElementById('User')
);