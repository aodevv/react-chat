import "./App.css";
import Left from "./layout/Left/Left";
import Center from "./layout/Center/Center";
import Right from "./layout/Right/Right";

import { GlobalStyles } from "./GlobalStyles";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Left />
      <Center />
      <Right />
    </div>
  );
}

export default App;
