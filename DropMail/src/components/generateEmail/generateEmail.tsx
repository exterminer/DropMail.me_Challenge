import { useContext, useRef } from "react";
import { EmailContext } from "../../providers/EmailContext/Emailcontext";
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
      <div>
        <label htmlFor="emailInput">Your temporary email address</label>
        <div>
          <input
            id="emailInput"
            type="text"
            value={userEmail}
            readOnly
            ref={inputRef}
          />
          <button onClick={() => handleCopy()}>Copy</button>
        </div>
        <div>
          <span>Autorefresh in</span>
          <span>5</span>
          <span>Butao de refresh</span>
          <span>Refresh</span>
        </div>
      </div>
    </>
  );
};
