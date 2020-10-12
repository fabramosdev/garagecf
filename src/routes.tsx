import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import GarageMap from './pages/GarageMap';

function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Landing} />
                <Route path="/map" component={GarageMap} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;