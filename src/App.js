import './App.css';
import ProfilePhoto from "./Components/Profile/ProfilePhoto"
import FullName from "./Components/Profile/FullName";
import Address from "./Components/Profile/Address"

function App() {
  return (
    <div className="App">
      <div className = "row">
        <div className ="col-4">
          <ProfilePhoto/>
        </div>
        <div className ="col-8">
          <FullName/>
          <Address/>
        </div>
      </div>
    </div>
  );
}

export default App;
