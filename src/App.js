import robot from './img/robot.png'
import './App.css'
import SecretNumber from './components/SecretNumber'

function App() {
  return (
      <div className="container">
        <div className="container-content">
            <img src={robot} className="robot-img" alt="robot" />
            <div className="container-info">
              <SecretNumber/>
            </div>
        </div>
      </div>
  );
}

export default App;
