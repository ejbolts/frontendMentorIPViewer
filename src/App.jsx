import { useEffect, useState } from "react";
import Header from "./components/Header";
import MapComponent from "./components/MapComponent";
import IPDetails from "./components/IPDetails";

function App() {
  const [findIP, setFindIP] = useState("");
  const [domainIP, setDomainIP] = useState({
    ipAddress: "",
    city: "",
    country: "",
    timezone: "",
    ISP: "",
    lat: 0,
    lng: 0,
  });
  useEffect(() => {
    async function getInitialIP() {
      const response = await fetch(
        `https://geo.ipify.org/api/v2/country,city?apiKey=at_wNXjFcNTx9ROaiEQlRqnx9uqUR5kI&ipAddress`
      );

      const data = await response.json();
      const initialIP = data;
      console.log(initialIP);

      setDomainIP({
        ipAddress: initialIP.ip,
        city: initialIP.location.region,
        country: initialIP.location.country,
        timezone: initialIP.location.timezone,
        ISP: initialIP.isp,
        lat: initialIP.location.lat,
        lng: initialIP.location.lng,
      });
    }
    getInitialIP();
  }, []);

  async function handleSubmit() {
    const response = await fetch(
      `https://geo.ipify.org/api/v2/country?apiKey=at_wNXjFcNTx9ROaiEQlRqnx9uqUR5kI&ipAddress=${findIP}`
    );
    const data = await response.json();
    console.log(data);
  }
  return (
    <>
      <Header handleSubmit={handleSubmit} />
      <IPDetails domainIP={domainIP} />
      <MapComponent lat={domainIP.lat} lng={domainIP.lng} />
    </>
  );
}

export default App;
