import './app.scss';
import HelloWorld from "./components/hello-world/HelloWorld";

const App = () => {
  return (
    <div className="App">
      <HelloWorld title={"Hello World"} />
    </div>
  )
}

export default App;
