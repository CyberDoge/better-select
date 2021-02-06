import { Provider } from "react-redux";
import "./App.css";
import Main from "./components/Main/Main";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Main />
      </div>
    </Provider>
  );
}

export default App;
