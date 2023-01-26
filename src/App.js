import "./App.css";
import ClickCounter from "./Components/ClickCounter";
import HoverCounter from "./Components/HoverCounter";

function App() {
  return (
    <div className="container">
      <h1>Higher Order Function</h1>
      <ClickCounter />
      <HoverCounter />

    <article>In this App, the main logic(for increasing counter) is kept separated in a Component. <br/></article>
    </div>
  );
}

export default App;
