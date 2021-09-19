import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavMenu from "./components/common/NavMenu";
import LoginForm from "./components/login/LoginForm";

function App() {
  return (
    <div>
      <NavMenu />
      <br />
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col col-4">
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
