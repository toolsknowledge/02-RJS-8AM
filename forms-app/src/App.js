import './App.css';
import Signup from "./components/Signup";
import rocket from "./assets/images/rocket.png";
function App() {
  return (
    <div className="container mt-5">
        <div className="row">
            <div className="col-md-5">
                <Signup></Signup>
            </div>
            <div className="col-md-7">
                <img src={rocket} className="img-fluid w-100"></img>
            </div>
        </div>
    </div>
  );
}

export default App;
