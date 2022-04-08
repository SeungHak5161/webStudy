import "./App.css";
import Composition from "./component/2-4. Props/Composition";
import Extraction from "./component/2-4. Props/Extraction";
import ClassComponent from "./component/2-5. State/ClassComponent";
import FunctionalComponent from "./component/2-5. State/FunctionalComponent";
import ClassComponent2 from "./component/2-6. LifeCycle/ClassComponent";
import Event from "./component/2-7. Event/Event";
import Conditional from "./component/2-8. ConditionalRendering/Conditional";
import List from "./component/2-9. List/List";
import ControlledComponent from "./component/2-10. Form/ControlledComponent";
import UncontrolledComponent from "./component/2-10. Form/UncontrolledComponent";
import CompositionDialog from "./component/2-11. Composition/CompositionDialog";
import SpecializedDialog from "./component/2-11. Composition/Specialize";
import Input from "./component/3-7. HOC/Input";
import Button from "./component/3-7. HOC/Button";
import Memo from "./component/3-8. Memoization/Memo";
import Example from "./component/3-3. Context/Example";
import Dialog from "./component/2-11. Composition/Dialog";
import ThankyouDialog from "./component/2-11. Composition/ThankyouDialog";
import Example2 from "./component/3-11. Portal/Example2";
import MouseTracker from "./component/3-17. RenderProps/MouseMove";

function App() {
  return (
    <div className="App">
      <MouseTracker />
      {/* <Example2 /> */}
      {/* <ThankyouDialog /> */}
      {/* <Example/> */}
      {/* <Memo/> */}
      {/* <Input/>
      <br/>
      <Button/> */}
      {/* <SpecializedDialog/> */}
      {/* <CompositionDialog/> */}
      {/* <ControlledComponent />
      <br/>
      --------------------------------------------------------------
      <br/>
      <br/>
      <UncontrolledComponent/> */}
      {/* <List />
      <Conditional/>
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
