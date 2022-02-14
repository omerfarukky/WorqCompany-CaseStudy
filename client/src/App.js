import FormInput from "./components/FormInput";
import List from "./components/List";
import Footer from "./components/Footer";
import { DataProvider } from "./components/DataProvider";
import "./App.css";

function App() {
  return (
    <DataProvider>
    <div className="App">
      <h1>TO Do List </h1>
      <FormInput />
      <List />
      <Footer />
    </div>
    </DataProvider>
  );
}

export default App;
