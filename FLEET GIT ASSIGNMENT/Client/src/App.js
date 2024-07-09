import logo from './logo.svg';
import './App.css';
import Login from './comps/login';
import { Route, Router } from 'react-router-dom';
import CommitPage from './Components_Repo/CommitPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/repositories/:owner/:repository/commit/:commitSHA" Component={CommitPage}/>
      </Router>
    </div>
  );
}

export default App;
