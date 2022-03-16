import Composition from './component/Composition';
import Extraction from './component/Extraction/Extraction';
import './App.css';
import ClassComponent from './component/state/ClassComponent';

function App() {
  return (
    <div className="App">
     <ClassComponent/>
     <Composition />
     <Extraction/>
    </div>
  );
}

export default App;
