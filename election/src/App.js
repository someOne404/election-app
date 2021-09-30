import { Provider } from "react-redux";
import { Switch, Route, Link } from "react-router-dom";

import './App.css';

import { voterToolStore } from "./stores/voterToolStore";

import { HelloWorldTool } from "./components/HelloWorldTool";
import { VoterTool } from "./components/VoterTool";


export function App() {
  return (
    <div className="container">
      <header className="page-header">
        <h1>Election App</h1>
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
          <Route path="/" exact><h2>Home</h2></Route>
          <Route path="/workflow1">
            <Provider store={voterToolStore}>
              <VoterTool />
            </Provider>
          </Route>
          <Route path="/workflow2">
            <HelloWorldTool />
          </Route>
          <Route path="/workflow3">
            <HelloWorldTool />
          </Route>
        </Switch>
      </main>
      <aside id="sidebar">
        Sidebar
      </aside>
      <footer id="page-footer">
        <small>Footer</small>
      </footer>
    </div>
  );
}
export default App;
