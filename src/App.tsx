import "./App.css";
import { Button } from "./components/ui/button";

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline text-red-500">
        Hello World!
      </h1>
      <Button variant="outline">Click me</Button>
      <Button variant="default">Click me</Button>
    </>
  );
}

export default App;
