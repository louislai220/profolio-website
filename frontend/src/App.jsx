import './App.css';
import Profile from "./Profile"
import Experience from "./Experience"

function App() {

  const exp = JSON.parse(import.meta.env.VITE_WORK_EXPERIENCE);
  console.log(exp);
  console.log(import.meta.env.VITE_BACKEND_URL);
  return (
    <div className="App">
      <Profile />
      <hr/>
      <Experience/>
    </div>
  );
}

export default App;
