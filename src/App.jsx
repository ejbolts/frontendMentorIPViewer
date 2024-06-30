import "./App.css";
import MapComponent from "./components/MapComponent";

function App() {
  async function getIP() {
    const response = await fetch(
      "https://geo.ipify.org/api/v2/country?apiKey=at_wNXjFcNTx9ROaiEQlRqnx9uqUR5kI&ipAddress=8.8.8.8"
    );
    const data = response.json();
    console.log(data);
  }
  return (
    <>
      <div className="App">
        <MapComponent />
      </div>
      <button onClick={() => getIP()}>Find IP</button>
    </>
  );
}

export default App;
