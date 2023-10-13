import { useContext, useRef } from "react";
import { EmailContext } from "../../providers/EmailContext/Emailcontext";
import { BiCopy } from "react-icons/bi";
import { IoRefreshCircleOutline } from "react-icons/io5";
import "../../index.css";
export const GenerateEmail = () => {
  const { email } = useContext(EmailContext);
  const userEmail = email?.addresses?.[0]?.address || "";
  const inputRef = useRef(null);
  const handleCopy = () => {
    const input = inputRef.current;
    if (input) {
      input.select();
      document.execCommand("copy");
    }
  };
  return (
    <>
      <div className="border border-gray-300">
        <div className="flex flex-col items-center">
          <label className="" htmlFor="emailInput">
            Your temporary email address
          </label>
          <div className="border border-gray-300 p-2 px-4 flex">
            <input
              id="emailInput"
              type="text"
              value={userEmail}
              readOnly
              ref={inputRef}
            />
            <button onClick={() => handleCopy()} className="flex items-center">
              <BiCopy />
              Copy
            </button>
          </div>
          <div className="flex gap-2">
            <span>Autorefresh in</span>
            <span>5</span>
            <button className="flex items-center">
              <IoRefreshCircleOutline  />
              Refresh
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
