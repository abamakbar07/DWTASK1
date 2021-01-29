import './App.css';
import LandingPage from './pages/LandingPage/LandingPage'
import Dashboard from './pages/Dashboard/Dashboard'
import Transaction from './pages/Transaction/Transaction';

function App() {
  return (
    <div className="App">
      {/* <LandingPage /> */}
      <Dashboard />
      <Transaction />
      
    </div>
  );
}

export default App;
