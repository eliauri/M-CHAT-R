import { observer } from "mobx-react";
import Test from "./components/Test/Test";
import Welcome from "./components/Welcome/Welcome";
import { testStore } from "./store/test-store";
import Result from "./components/Result/Result";

const App = observer(() => {
  const { testActivated, testResult } = testStore;

  if (testResult)
    return (
      <div className="App">
        <Result />
      </div>
    )
  return (
    <div className="App">
      {testActivated && <Test />}
      <Welcome />
    </div>
  );
})

export default App;
