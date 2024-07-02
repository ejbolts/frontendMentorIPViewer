export default function IPDetails({ domainIP }) {
  const { ip, city, country, timezone, isp } = domainIP;

  return (
    <div className="IpContainerDetails">
      <section className="ContainerSection">
        <h3>IP ADDRESS</h3>
        <p>{ip}</p>
      </section>
      <section className="ContainerSection">
        <h3>LOCATION</h3>
        <p>
          {city}, {country}
        </p>
      </section>
      <section className="ContainerSection">
        <h3>TIMEZONE</h3>
        <p>{timezone}</p>
      </section>
      <section className="ContainerSection">
        <h3>ISP</h3>
        <p>{isp}</p>
      </section>
    </div>
  );
}
