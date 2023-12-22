import { Route, Router } from "react-router-dom";
import Landing from "./components/Landing";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import UpdatePass from "./components/UpdatePass";

function App() {
  return( 
  <Landing />
  <Router>
    <Route path="/home" component={Home}/>
    <Route path="/login" component={Login}/>
    <Route path="/register" component={Register}/>
    <Route path="/updatepwd" component={UpdatePass}/>
    
  </Router>
  
  
  );
}

export default App;
