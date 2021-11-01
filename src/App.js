import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AuthProvider from './context/AuthProvider';
import AddService from './Pages/AddService/AddService';
import Footer from './Pages/Footer/Footer';
import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import ManageAllTours from './Pages/ManageAllTours/ManageAllTours';
import MyPlans from './Pages/MyPlans/MyPlans';
import NotFound from './Pages/NotFound/NotFound';
import ServiceDetail from './Pages/ServiceDetail/ServiceDetail';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/myPlans">
              <MyPlans></MyPlans>
            </Route>
            <Route Route path="/ManageAllTour">
              <ManageAllTours></ManageAllTours>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route Route path="/addService">
              <AddService></AddService>
            </Route>
            <PrivateRoute Route path="/serviceDetail/:id">
              <ServiceDetail></ServiceDetail>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;