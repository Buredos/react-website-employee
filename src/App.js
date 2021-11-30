import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './pages';
import SigninPage from './pages/signin';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';
import Footer from './components/Footer';

import ViewLeaveOfAbsenceComponent from './components/ViewLeaveOfAbsenceComponent';
import ListLeaveOfAbsenceComponent from './components/ListLeaveOfAbsenceComponent';
import CreateLeaveOfAbsenceComponent from './components/CreateLeaveOfAbsenceComponent';

import ListHierarchyComponent from './components/ListHierarchyComponent';
import CreateHierarchyComponent from './components/CreateHierarchyComponent';
import ViewHierarchyComponent from './components/ViewHierarchyComponent';

import ListPositionComponent from './components/ListPositionComponent';
import ViewPositionComponent from './components/ViewPositionComponent';
import CreatePositionComponent from './components/CreatePositionComponent';



function App() {
  return (
    
    <div>
      <Router>
        
      <Switch>
        <Route path='/' component={Home} exact/>
        <Route path='/signin' component = {SigninPage} exact/>
      </Switch>
          <div>
            <Switch>
              <Route path = "/employees" component = {ListEmployeeComponent}></Route>
              <Route path = "/add-employee/:id" component = {CreateEmployeeComponent}></Route>
              <Route path = "/view-employee/:id" component = {ViewEmployeeComponent}></Route>

              <Route path = "/hierarchy" component = {ListHierarchyComponent}></Route>
              <Route path = "/add-hierarchy/:id" component = {CreateHierarchyComponent}></Route>
              <Route path = "/view-hierarchy/:id" component = {ViewHierarchyComponent}></Route>

              <Route path = "/position" component = {ListPositionComponent}></Route>
              <Route path = "/add-position/:id" component = {CreatePositionComponent}></Route>
              <Route path = "/view-position/:id" component = {ViewPositionComponent}></Route>

              <Route path = "/leaveofabsence" component = {ListLeaveOfAbsenceComponent}></Route>
              <Route path = "/add-leaveofabsence/:id" component = {CreateLeaveOfAbsenceComponent}></Route>
              <Route path = "/view-leaveofabsence/:id" component = {ViewLeaveOfAbsenceComponent}></Route>
            </Switch>
          </div>
      <Footer />
    </Router>
    </div>
    
  );
}

export default App;
