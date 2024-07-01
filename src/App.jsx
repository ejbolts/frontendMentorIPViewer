import { useEffect, useState } from "react";
import Header from "./components/Header";
import MapComponent from "./components/MapComponent";
import IPDetails from "./components/IPDetails";

function App() {
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
        ip: initialIP.ip,
        city: initialIP.location.region,
        country: initialIP.location.country,
        timezone: initialIP.location.timezone,
        isp: initialIP.isp,
        lat: initialIP.location.lat,
        lng: initialIP.location.lng,
      });
    }
    getInitialIP();
  }, []);

  const handleSubmit = async (ipAddress) => {
    try {
      const response = await fetch(
        `https://geo.ipify.org/api/v2/country,city?apiKey=at_wNXjFcNTx9ROaiEQlRqnx9uqUR5kI&ipAddress=${ipAddress}`
      );
      const data = await response.json();
      setDomainIP({
        ip: data.ip,
        city: data.location.city,
        country: data.location.country,
        timezone: data.location.timezone,
        isp: data.isp,
        lat: data.location.lat,
        lng: data.location.lng,
      });
      console.log(data);
    } catch (error) {
      console.error("Error fetching IP data:", error);
    }
  };
  return (
    <>
      <Header handleSubmit={handleSubmit} />
      <IPDetails domainIP={domainIP} />
      <MapComponent lat={domainIP.lat} lng={domainIP.lng} />
    </>
  );
}

export default App;
