import React from 'react';
import { Actions, Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EployeeCreate from './components/EmployeeCreate';
import EployeeEdit from './components/EmployeeEdit';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar>

        <Scene key="auth">
          <Scene key="login" component={LoginForm} title="Please login" initial />
        </Scene>

        <Scene key="main">
          <Scene
            rightTitle="Add"
            onRight={() => { Actions.employeeCreate(); }}
            key="employeeList"
            component={EmployeeList}
            title="Employee list"
            initial
          />
          <Scene key="employeeCreate" component={EployeeCreate} title="Create employee" />
          <Scene key="employeeEdit" component={EployeeEdit} title="Edit employee" />
        </Scene>

      </Scene>
    </Router>
  );
};

export default RouterComponent;
