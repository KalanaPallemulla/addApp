import "./App.css";
import Register from "./auth/Register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PostAdd from "./pages/PostAdd";
import Login from "./auth/Login";
import Home from "./pages/Home";
import About from "./pages/About";
import NewNav from "./components/NewNav";
import Dashbord from "./pages/Dashbord";
import SingleAdd from "./pages/SingleAdd";
import PrivateRoute from "./components/PrivateRoute";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Router>
        <NewNav />
        <Switch>
          <Route exact path="/" component={Home} />
          <PrivateRoute exact path="/dashboard" component={Dashbord} />
          <PrivateRoute exact path="/post_add" component={PostAdd} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/about" component={About} />

          <Route exact path="/add/:addId" component={SingleAdd} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
