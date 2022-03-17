import Composition from './component/Composition';
import Extraction from './component/Extraction/Extraction';
import './App.css';
import ClassComponent from './component/state/ClassComponent';
import FunctionalComponent from './component/state/FunctionalComponent';

function App() {
  return (
    <div className="App">
     <FunctionalComponent/>
     <ClassComponent/>
     <Composition />
     <Extraction/>
    </div>
  );
}

export default App;
