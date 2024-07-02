import { useEffect, useState } from "react";
import Header from "./components/Header";
import MapComponent from "./components/MapComponent";
import IPDetails from "./components/IPDetails";
import ErrorModal from "./components/ErrorModal";

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
  const handleCloseModal = () => {
    setError(false);
  };
  const [error, setError] = useState(false);
  useEffect(() => {
    async function getInitialIP() {
      try {
        const response = await fetch(
          `https://geo.ipify.org/api/v2/country,city?apiKey=at_wNXjFcNTx9ROaiEQlRqnx9uqUR5kI`
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
      } catch (error) {
        setError(error);
        console.error("Error fetching initial IP data:", error);
      }
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
      setError(false);
    } catch (error) {
      setError(error);
      console.error("Error fetching IP data:", error);
    }
  };
  return (
    <>
      <Header handleSubmit={handleSubmit} error={error} />
      <IPDetails domainIP={domainIP} />
      <MapComponent lat={domainIP.lat} lng={domainIP.lng} />
      <ErrorModal open={error} onClose={handleCloseModal}>
        <p>
          Sorry there was an error fetching the data: {error && error.message}
        </p>
      </ErrorModal>
      <div className="attribution">
        <p>
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>{" "}
          Coded by{" "}
          <a href="https://www.frontendmentor.io/profile/ejbolts">
            Ethan Bolton
          </a>
        </p>
      </div>
    </>
  );
}

export default App;
