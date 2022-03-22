import './App.css';
import Composition from './component/2-4. Props/Composition';
import Extraction from './component/2-4. Props/Extraction';
import ClassComponent from './component/2-5. State/ClassComponent';
import FunctionalComponent from './component/2-5. State/FunctionalComponent';
import ClassComponent2 from './component/2-6. LifeCycle/ClassComponent';
import Event from './component/2-7. Event/Event';
import Conditional from './component/2-8. ConditionalRendering/Conditional';
import List from './component/2-9. List/List';

function App() {
  return (
    <div className="App">
      <List />
      {/* <Conditional/>
      <Event />
      <ClassComponent2/>
      <FunctionalComponent/>
      <ClassComponent/>
      <Composition />
      <Extraction/> */}
    </div>
  );
}

export default App;