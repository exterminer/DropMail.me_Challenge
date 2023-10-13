import { useContext} from "react";
import { EmailContext } from "../../providers/EmailContext/Emailcontext";


export const Email = () => {
    const {mails} = useContext(EmailContext)
    console.log(mails.mails)
  return (
    <>
      <div>
        <h4>Inbox</h4>
      </div>
      <div>
        <ul>
        {Array.isArray(mails.mails) && mails.mails.length > 0
            ? mails.mails.map((element, index) => (
                <li key={index}>
                  <h4>{element.headerSubject}</h4>
                  <p>{element.text}</p>
                </li>
              ))
            : null}
        </ul>
      </div>
    </>
  );
};
