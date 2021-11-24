import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import './App.css';
import Home from './pages';
import SigninPage from './pages/signin';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';
import Footer from './components/Footer';


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
            </Switch>
          </div>
      <Footer />
    </Router>
    </div>
    
  );
}

export default App;
