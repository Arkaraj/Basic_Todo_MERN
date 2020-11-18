import React from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Login from './Components/Login'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Register from './Components/Register';
import TodoItem from './Components/TodoItem';
import Todos from './Components/Todos';
import Admin from './Components/Admin';
import PrivateRoute from './hoc/PrivateRoutes';
import UnPrivateRoute from './hoc/UnPrivateRoutes';


function App() {
  return (
    <Router>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <PrivateRoute path="/todos" roles={["user", "admin"]} component={Todos} />
      <PrivateRoute path="/admin" roles={["admin"]} component={Admin} />
    </Router>
  );
}

export default App;
