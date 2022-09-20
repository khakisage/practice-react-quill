import './App.css';
import { db } from './firebase';

function App() {
  return <div className="App">{db._databaseId.projectId}</div>;
}

export default App;
