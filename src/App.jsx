import About from "./components/About";
import componentData from "./components/componentData";
import Mentors from "./components/Mentors";

function App() {
  return (
    <div className="App">
      {/* <About />
      <Mentors componentData={componentData} /> */}
         <Sidebar />
      <AskDoubt />
    </div>
  );
}

export default App;
