import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import tasks from "./pages/tasks";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={tasks} />
      </Switch>
    </Router>
  );
}

export default App;
