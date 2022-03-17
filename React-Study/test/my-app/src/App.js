import Composition from './component/Composition';
import Extraction from './component/Extraction/Extraction';
import './App.css';
import ClassComponent from './component/State/ClassComponent';
import FunctionalComponent from './component/State/FunctionalComponent';
import ClassComponent2 from './component/LifeCycle/ClassComponent';

function App() {
  return (
    <div className="App">
      <ClassComponent2/>
      {/* <FunctionalComponent/>
      <ClassComponent/>
      <Composition />
      <Extraction/> */}
    </div>
  );
}

export default App;
