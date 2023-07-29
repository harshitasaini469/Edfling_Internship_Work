import About from "./components/About";
import componentData from "./components/componentData";
import Mentors from "./components/Mentors";

function App() {
  return (
    <div className="container">
      <About />
      <div></div>
      <Mentors componentData={componentData} />
    </div>
  );
}

export default App;
