import {BrowserRouter as Router,Switch ,Route} from 'react-router-dom'
import Login from './components/Login/Login';

function App() {
  return (
   <Router>
   <Switch>
   <Route exact path="/" component={Login}/>
   
   </Switch>
   </Router>
  );
}

export default App;
