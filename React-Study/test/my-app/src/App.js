import './App.css';
import Composition from './component/Composition';
import Extraction from './component/Extraction/Extraction';
import ClassComponent from './component/State/ClassComponent';
import FunctionalComponent from './component/State/FunctionalComponent';
import ClassComponent2 from './component/LifeCycle/ClassComponent';
import Event from './component/Event/Event';
import Conditional from './component/ConditionalRendering/Conditional';

function App() {
  return (
    <div className="App">
      <Conditional/>
      {/* <Event />
      <ClassComponent2/>
      <FunctionalComponent/>
      <ClassComponent/>
      <Composition />
      <Extraction/> */}
    </div>
  );
}

export default App;