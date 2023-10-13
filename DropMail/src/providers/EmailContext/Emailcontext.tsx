import { createContext, useState, useEffect } from "react";
import { api } from "../../service/api";

export const EmailContext = createContext({});

export const EmailProvider = ({ children }) => {
  const [email, setEmail] = useState({});
  const [mails, setMails] = useState({});

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
  const fetchEmailQuery: string = `
  query {
    session(id:"${email?.id}") {
        mails{
            rawSize,
            fromAddr,
            toAddr,
            downloadUrl,
            text,
            headerSubject
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

  const fecthEmail = async () => {
    const emails = await api.post("184381481781", {
      query: fetchEmailQuery,
      headers: {
        "content-type": "application/json",
      },
    });
    setMails(emails.data.data.session);
  };
  useEffect(() => {
    createEmail();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      fecthEmail();
    }, 15000);

    return () => {
      clearInterval(interval);
    };
  },[]);

  return (
    <EmailContext.Provider value={{ email, mails }}>
      {children}
    </EmailContext.Provider>
  );
};
