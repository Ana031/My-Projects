import React from 'react';
import { Route, Switch} from 'react-router-dom';

import Home from '../home';
import Users from '../users';
import Provider from '../fornecedor';

const Routes = () => {
  return(
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/users' component={Users} />
        <Route path='/provider' component={Provider} />
      </Switch>
  )
};

export default Routes;