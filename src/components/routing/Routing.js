import React from 'react';
import { Router } from '@reach/router';
import Welcome from './Welcome';
import Value from './Value';
import Multiple from './Multiple';

const Routing = props => {
    return(
        <div>
            <Router>
                <Welcome path="/welcome"/>
                <Value path="/:value"/>
                <Multiple path="/:word/:color/:backgroundColor"/>
            </Router>
        </div>
    )
}

export default Routing;