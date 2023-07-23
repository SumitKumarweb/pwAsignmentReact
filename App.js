import Asginmentone from "./Asginmentone";
import Asginmentfour from "./Asignmentfour";
import Asignmentthree from "./Asignmentthree";
import Asginmentwo from "./Asignmenttwo";

function App() {

  const arr = ["item1", "item2" , "item3" , "item4"];

  return (
    <>
      <Asginmentone name="sumit" age="19"/>
      <Asginmentwo text="click"/>
      <Asignmentthree title="welcome to our website"/>
      <Asginmentfour items={arr}/>
    </>
  );
}

export default App;
