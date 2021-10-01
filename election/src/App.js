import { Provider } from "react-redux";
import { Switch, Route, Link } from "react-router-dom";

import './App.css';

import { voterToolStore } from "./stores/voterToolStore";

import { VoterTool } from "./components/VoterTool";
import { ElectionToolContainer } from "./containers/ElectionToolContainer";
import { VotingTool } from "./components/VotingTool";

import logo from './images/intuit-jaguar.png';

export function App() {
  return (
    <div className="container-fluid">
      <header id="page-header">
        <h1>Election App</h1>
        <div>Team Jaguars</div>
        <div>Taking a <strong>byte</strong> <br></br>out of the competition!</div>
        <div><img id="logo" src={logo}></img></div>
      </header>
      <nav id="menubar">
        <ul>
          <li className="menuitem"><Link to="/">Home</Link></li>
          <li className="menuitem"><Link to="/workflow1">Workflow 1</Link></li>
          <li className="menuitem"><Link to="/workflow2">Workflow 2</Link></li>
          <li className="menuitem"><Link to="/workflow3">Workflow 3</Link></li>
        </ul>
      </nav>
      <main id="content">
        <Switch>
          <Route path="/workflow1">
            <Provider store={voterToolStore}>
              <VoterTool />
            </Provider> 
          </Route>
          <Route path="/workflow2">
            <Provider store={voterToolStore}>
              <VotingTool />
            </Provider> 
          </Route>
          <Route path="/workflow3">
            <Provider store={voterToolStore}>
              <ElectionToolContainer />
            </Provider>
          </Route>
        </Switch>
      </main>
      <footer id="page-footer" className="fixed-bottom">
        <small>&copy; Intuit Jaguars</small>
      </footer>
    </div>
  );
}
export default App;
