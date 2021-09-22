import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import AllInfo from "./AllInfo";
import ContectUs from "./ContectUs";
import LogIn from "./LogIn";
import Register from "./Register";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import LockIcon from '@material-ui/icons/Lock';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import errPag from "./errPag";
import homePage from "./homePage";

function App() {
  return (
    <div>
    <div className="position-fixed">
      <img src="./alchemy.png" className="ms-3" style={{width:"60px"}}/>
      <p className="text-warning">HealthServices</p>
    </div>
    <div className="text-center bg-light text-dark">
    <BrowserRouter>
    <div className="">
      <Link to="/allinfo" className="text-decoration-none text-dark p-4"><ImportContactsIcon />All-Info</Link>
      <Link to="/contectus" className="text-decoration-none text-dark p-4"><ContactPhoneIcon />ContectUs</Link>
      <Link to="/login" className="text-decoration-none text-dark p-4"><LockIcon />LogIn</Link>
      <Link to="/register" className="text-decoration-none text-dark p-4"><VpnKeyIcon />Register</Link>
    </div>
    <div>
    <Switch>
      <Route path="/allinfo" component={AllInfo}/>
      <Route path="/contectus" component={ContectUs}/>
      <Route path="/login" component={LogIn}/>
      <Route path="/register" component={Register}/>
      <Route exact path="/" component={homePage}/>
      <Route component={errPag} />
    </Switch>
    </div>
    </BrowserRouter>
    </div>
    </div>
  );
}

export default App;
