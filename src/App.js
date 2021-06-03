
import './App.css';
import ReduxFunComp from './Components/ReduxFunComp';

import ReduxStateComp from './Components/ReduxStateComp'
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <ReduxStateComp/>
      <ReduxFunComp/>
      </header>
    </div>
  );
}

export default App;
