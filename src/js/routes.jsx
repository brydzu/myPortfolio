import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/app';
import Home from './components/Home';
import Work from './components/Work';
import Projects from './components/Projects';

export default(
    <Route path="/" component={App}>
        <IndexRoute component={Home}></IndexRoute>
        <Route path="/work" component={Work}></Route>
        <Route path="/projects" component={Projects}></Route>
    </Route>
);
