import React from "react";

export default function IPDetails({ domainIP }) {
  const { ipAddress, city, country, timezone, ISP } = domainIP;

  return (
    <div>
      <div>
        <h3>IP ADDRESS</h3>
        <p>{ipAddress}</p>
      </div>
      <div>
        <h3>LOCATION</h3>
        <p>{city}</p>

        <p>{country}</p>
      </div>
      <div>
        <h3>TIMEZONE</h3>
        <p>{timezone}</p>
      </div>
      <div>
        <h3>ISP</h3>
        <p>{ISP}</p>
      </div>
    </div>
  );
}
