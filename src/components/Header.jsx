import { useRef } from "react";
import BGpattern from "../assets/pattern-bg-desktop.png";
export default function Header({ handleSubmit }) {
  const inputRef = useRef();

  return (
    <>
      <div
        className="header"
        style={{
          backgroundImage: `url(${BGpattern})`,
          backgroundSize: "cover",
        }}
      >
        <h1>IP Address Tracker</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(inputRef.current.value);
          }}
        >
          <input
            type="text"
            className="Ip-search"
            placeholder="Search for any IP address or domain"
            ref={inputRef}
          />
          <button>Send</button>
        </form>
      </div>
    </>
  );
}
