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
          className="input-form"
        >
          <div className="input-container">
            <input
              type="text"
              className="Ip-search"
              placeholder="Search for any IP address or domain"
              ref={inputRef}
            />
            <button type="submit" className="submit-button">
              <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14">
                <path
                  fill="none"
                  stroke="#FFF"
                  strokeWidth="3"
                  d="M2 1l6 6-6 6"
                />
              </svg>
              <path
                d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
