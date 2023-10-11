import { createContext, useState , useEffect } from "react";
import { api } from "../../service/api";

export const EmailContext = createContext({});

export const EmailProvider = ({ children }) => {
  const [email, setEmail] = useState({});
  const query: string = `
    mutation {
      introduceSession {
        id
        expiresAt
        addresses {
          address
        }
      }
    }
  `;

  const createEmail = async () => {
    const email = await api.post("184381481781", {
      query: query,
      headers: {
        "content-type": "application/json",
      },
    });
    setEmail(email.data.data.introduceSession);
  };

  useEffect(()=>{
    createEmail()
  },[])

  return (
    <EmailContext.Provider value={{ email }}>
      {children}
    </EmailContext.Provider>
  );
};
